## Minio Storage

NestJS 및 MinIO를 사용하여 이미지를 업로드하고 처리하는 서비스입니다.

## 패키지 설명

- **@nestjs/common, @nestjs/config**: NestJS의 핵심 패키지입니다. Config 패키지는 환경 설정을 관리합니다.
- **minio**: MinIO 클라이언트 라이브러리로, MinIO 서버와의 통신을 지원합니다.
- **axios**: HTTP 요청을 보내기 위한 Promise 기반의 클라이언트입니다.

## 기능 설명

### MinioService

- **uploadFile**: 이미지 파일을 MinIO에 업로드하고, 해당 이미지의 사전 서명된 URL을 반환합니다.
- **getFileUrl**: 지정된 파일 이름의 사전 서명된 URL을 반환합니다.
- **deleteFile**: 지정된 파일 이름의 MinIO에서의 파일을 삭제합니다.

<details><summary>minio.service.ts 코드 보기</summary>
<div>

```typescript
import { Injectable, Inject } from '@nestjs/common';
import * as Minio from 'minio';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { rawResponseData } from '../users/entities/fileresponsedto.entity';

@Injectable()
export class MinioService {
  private imageBucket: string;
  private queryBucket: string;

  constructor(
    private readonly configService: ConfigService,
    @Inject('MINIO') private minioClient: Minio.Client,
  ) {
    this.imageBucket = configService.get<string>('MINIO_IMAGE_BUCKET');
    this.queryBucket = configService.get<string>('MINIO_QUERY_BUCKET');
  }

  async uploadFile(file: Express.Multer.File): Promise<rawResponseData> {
    const fileName = `${Date.now()}-${file.originalname}`;
    const SERVER_ADDRESS = this.configService.get<string>('SERVER_ADDRESS');

    // save this image to minio queryBucket
    await this.minioClient.putObject(this.queryBucket, fileName, file.buffer);

    // Get URL for uploaded image
    const imageUrl = await this.minioClient.presignedUrl(
      'GET',
      this.queryBucket,
      fileName,
      24 * 60 * 60,
    );

    const response = await axios.post(`http://${SERVER_ADDRESS}:5000/search`, {
      filename: '',
      collection_name: 'reverse_image_search',
      img_path: imageUrl,
      category: '',
    });

    const responseData = response.data;

    return responseData;
  }

  async getFileUrl(fileName: string) {
    return await this.minioClient.presignedUrl(
      'GET',
      this.imageBucket,
      fileName,
      24 * 60 * 60,
    );
  }

  async deleteFile(fileName: string) {
    await this.minioClient.removeObject(this.queryBucket, fileName);
  }
}
```

</div>
</details>

### MinioController

- **uploadBookCover**: 이미지를 MinIO에 업로드하고, 유사한 이미지의 URL을 반환합니다.
- **getBookCover**: 파일 데이터를 기반으로 유사한 이미지의 URL을 반환합니다.
- **deleteBookCover**: 지정된 파일 이름의 이미지를 삭제합니다.
- **geturl**: 지정된 파일 이름의 이미지 URL을 반환합니다.

<details><summary>minio.module.ts 코드 보기</summary>
<div>

```typescript
import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
  Body,
  UseGuards,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MinioService } from './minio.service';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiParam } from '@nestjs/swagger';
import { rawResponseData } from '../users/entities/fileresponsedto.entity';
import { RawResponseDataService } from './rawresponsedata.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('image')
export class MinioController {
  constructor(
    private readonly minioService: MinioService,
    private readonly rawDataService: RawResponseDataService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post('covers')
  @ApiBearerAuth('access-token')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  async uploadBookCover(@UploadedFile() file: Express.Multer.File) {
    console.log('image/covers endpoint hit!');
    console.log(file);

    // Save the image to minio and put it into engine to get raw data
    const filedata: rawResponseData = await this.minioService.uploadFile(file);

    // save the raw data to postgresql
    await this.rawDataService.saveData(filedata);

    // Get a presigned URL for a similar image and return it
    const fileurl = this.getBookCover(filedata);
    console.log(fileurl);
    return fileurl;
  }

  @Post('data')
  @ApiBody({ type: rawResponseData, description: 'File data' })
  async getBookCover(@Body() fileData: rawResponseData): Promise<string[]> {
    await this.rawDataService.saveData(fileData);
    const predictions = fileData.pred.map(async (predName: string) => {
      // const convertedName = predName.replace(/_/g, '-') + '.jpeg';
      return await this.minioService.getFileUrl(predName);
    });
    return await Promise.all(predictions);
  }

  @Delete('covers/:fileName')
  @ApiParam({
    name: 'fileName',
    required: true,
    description: 'The name of the file',
  })
  async deleteBookCover(@Param('fileName') fileName: string) {
    await this.minioService.deleteFile(fileName);
    return fileName;
  }

  @Post('cevers/geturl')
  @ApiParam({
    name: 'fillname',
  })
  async geturl(@Param('fileName') fileName: string) {
    const link = await this.minioService.getFileUrl(fileName);
    return link;
  }
}

```

</div>
</details>

## 설정

MinIO와의 연동 및 다른 설정 값들은 `.env` 파일 또는 환경 변수를 통해 관리됩니다. 설정 값에는 `MINIO_ENDPOINT`, `MINIO_PORT`, `MINIO_USE_SSL`, `MINIO_ACCESS_KEY`, `MINIO_SECRET_KEY` 등이 포함됩니다.

<details><summary>minio.module.ts 코드 보기</summary>
<div>

```typescript
import { Module, Global } from '@nestjs/common';
import { MinioService } from './minio.service';
import { MinioController } from './minio.controller';
import { Client, ClientOptions } from 'minio';
import { Provider } from '@nestjs/common/interfaces';
import { ConfigService } from '@nestjs/config';
import { RawResponseDataService } from './rawresponsedata.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { rawResponseData } from 'src/users/entities/fileresponsedto.entity';
import { HistoryDataService } from './searchistory.serveice';
import { historyData } from 'src/users/entities/history.entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([rawResponseData]),
    TypeOrmModule.forFeature([historyData]),
  ],
  providers: [
    {
      provide: 'MINIO',
      useFactory: (configService: ConfigService) => {
        const minioClientOptions: ClientOptions = {
          endPoint: configService.get<string>('MINIO_ENDPOINT'),
          port: Number(configService.get<string>('MINIO_PORT')),
          useSSL: configService.get<string>('MINIO_USE_SSL') === 'true',
          accessKey: configService.get<string>('MINIO_ACCESS_KEY'),
          secretKey: configService.get<string>('MINIO_SECRET_KEY'),
        };
        
        return new Client(minioClientOptions);
      },
      inject: [ConfigService],
    },
    MinioService,
    RawResponseDataService,
    HistoryDataService
  ],
  controllers: [MinioController],
  exports: [MinioService],
})
export class MinioModule {}

```

</div>
</details>

## 사용 방법

1. 이미지 업로드: POST 요청을 `/image/covers` 엔드포인트로 보냅니다. 요청 본문에는 업로드할 파일이 포함되어야 합니다.
2. 이미지 삭제: DELETE 요청을 `/image/covers/{fileName}` 엔드포인트로 보냅니다.
3. 이미지 URL 가져오기: POST 요청을 `/image/covers/geturl` 엔드포인트로 보냅니다.

---

### Minio 버킷의 효율적인 사용(버킷이 2개인 이유)

데이터 관리는 어떤 시스템에서나 중요한 부분입니다. 특히 클라우드 스토리지와 같은 환경에서는 데이터를 효율적으로 구성하고 관리하는 것이 중요합니다. 우리의 `minio.service.ts`에서는 Minio 스토리지에서 두 개의 별도의 버킷을 사용하여 데이터를 관리하는 전략을 채택했습니다.

1. **이미지 저장 버킷 (`imageBucket`)**:
    - 이 버킷은 직접적인 이미지 파일을 저장하는 데 사용됩니다.
    - 고해상도 이미지나 원본 파일 등, 사용자가 업로드한 원본 이미지 데이터를 안전하게 보관하기 위한 목적으로 사용됩니다.
    - 위 데이터는 추후 다양한 용도(이미지 분류, 저작권 검사, 생산 물품 오류 감지 등등)에 사용될 가능성이 있습니다.

2. **이미지 URL 조회 버킷 (`queryBucket`)**:
    - 이 버킷은 이미지에 대한 접근 URL을 제공하는 데 사용됩니다.
    - URL은 외부 시스템과의 통신이나 사용자에게 이미지를 제공할 때 사용되며, 짧은 시간 동안만 유효한 사전 서명된 URL을 생성하여 제공합니다.
    - 이러한 접근 방식은 보안을 강화하고, 불필요한 데이터 노출을 최소화하는 데 도움이 된다.

이 두 버킷을 분리함으로써, 우리는 이미지 데이터의 저장과 조회를 명확하게 분리할 수 있게 되었습니다. 또한 이미지 데이터를 직접 주고 받는 형식이 아닌 유효시간이 있는 URL을 받음으로서 민감한 데이터의 보안을 강화하고 주고받는 데이터의 크기를 효율적으로 줄일 수 있습니다. 또한 데이터의 조작이나 변경 없이 원본 이미지를 안전하게 보관할 수 있다는 장점을 제공합니다. 또한, 이러한 구조는 시스템의 확장성과 유지 보수성을 높이는 데도 큰 도움을 줍니다.

--- 