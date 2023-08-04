import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MinioService } from './minio.service';
import { ApiBody, ApiConsumes, ApiParam } from '@nestjs/swagger';

@Controller()
export class MinioController {
  constructor(private readonly minioService: MinioService) {}

  @Post('covers')
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
    await this.minioService.createBucketIfNotExists();
    const fileName = await this.minioService.uploadFile(file);
    return fileName;
  }

  @Get('covers/:fileName')
  @ApiParam({
    name: 'fileName',
    required: true,
    description: 'The name of the file',
  })
  async getBookCover(@Param('fileName') fileName: string) {
    const fileUrl = await this.minioService.getFileUrl(fileName);
    return fileUrl;
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
