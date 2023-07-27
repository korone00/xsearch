import { Controller, Post, UploadedFiles, UseInterceptors, Res, HttpStatus } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import * as path from 'path';
import { HttpService } from '@nestjs/axios';
import * as fs from 'fs';
import * as FormData from 'form-data';

@Controller('upload')
export class UploadController {
  constructor(private httpService: HttpService) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        'file': {
          type: 'array',
          items: {
            type: 'string',
            format: 'binary',
          },
        },
      },
    },
  })
  @UseInterceptors(
    FilesInterceptor('file', 20, {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return cb(null, `${randomName}${path.extname(file.originalname)}`);
        },
      }),
    }),
  )
  async uploadFile(@UploadedFiles() files, @Res() res) {
    if (!files || files.length === 0) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'No files uploaded',
      });
    }

    const uploadPromises = files.map((file) => {
      const formData = new FormData();
      formData.append('file', fs.createReadStream(file.path), file.filename);
      
      return this.httpService
        .post('http://192.168.0.101:5000/upload', formData, {
          headers: formData.getHeaders(),
        })
        .toPromise();
    });

    try {
      const results = await Promise.all(uploadPromises);
      const flaskResponses = results.map((result) => result.data);
      return res.status(HttpStatus.OK).json(flaskResponses);
    } catch (e) {
      console.error(e);  // 에러 로깅
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Failed to upload one or more files',
      });
    }
  }   
}
