import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from '@nestjs/axios';
import {
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller()
@ApiTags('Get Data API')
export class GetMilvusController {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}
  @ApiOperation({
    summary: 'Get Milvus Data API',
    description: 'MilvusDB의 json파일을 가져온다.',
  })
  @ApiResponse({ description: 'json data 가져오기' })
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
  @Get('getdata')
  async getData(): Promise<any> {
    const apiUrl = this.configService.get<string>('MILVUS_API_URL');
    const response = await this.httpService.get(apiUrl).toPromise();
    return response.data;
  }
}
