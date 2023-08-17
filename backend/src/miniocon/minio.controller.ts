import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
  Body,
  UseGuards
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MinioService } from './minio.service';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiParam } from '@nestjs/swagger';
import { rawResponseData } from '../users/entities/fileresponsedto.entity';
import { RawResponseDataService } from './rawresponsedata.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('image')
export class MinioController {
  constructor(private readonly minioService: MinioService,
    private readonly rawDataService: RawResponseDataService) {}
  
  // @UseGuards(JwtAuthGuard)
  @Post('covers')
  // @ApiBearerAuth('access-token')
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
    console.log("image/covers endpoint hit!");
    console.log(file)
    // Save the image to minio and put it into engine to get raw data
    const filedata: rawResponseData = await this.minioService.uploadFile(file);

    // save the raw data to postgresql
    await this.rawDataService.saveData(filedata);

    // Get a presigned URL for a similar image and return it
    const fileurl = this.getBookCover(filedata);
    console.log(fileurl)
    return fileurl
  }

  @Post('data')
  @ApiBody({ type: rawResponseData, description: 'File data' })
  async getBookCover(@Body() fileData: rawResponseData): Promise<string[]> {
    await this.rawDataService.saveData(fileData);
    const predictions = fileData.pred.map(async (predName: string) => {
      const convertedName = predName.replace(/_/g, '-') + '.jpeg';
      return await this.minioService.getFileUrl(convertedName);
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
}