import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { multerOptions } from './config';
import { ApiBody, ApiConsumes,  ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import axios from 'axios';



@Controller('upload')
@ApiTags('file upload API')
export class uploadController {
  @Post()
  @ApiOperation({summary:'파일 업로드 API', description:'파일을 저장 및 업로드힌다.'})
  @ApiResponse({description:'파일 업로드'})
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: { 
          type: 'string',
          format: 'binary'
        },
      },
    },
  })

  @UseInterceptors(FilesInterceptor('file', null, multerOptions))
  async UploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log("파일 업로드");

    const fs = require('fs');
    const path = require('path');
    let img_path = '';

    const loadFiles = new Promise((resolve, reject) => {
      fs.readdir('./uploads', (err: any, files: any[]) => {
        if (err) reject(err);

        for (let i = 0; i < files.length; i++) {
          img_path = path.join('../../../../../uploads', `${files[i]}`);
        }
        console.log(files);
        console.log(img_path);
        resolve(img_path);
      });
    });
    await loadFiles;

    console.log('Sending request to Flask server with data:', {
      collection_name: "reverse_image_search",
      img_path: img_path,
      category: ""
    });

    const response = await axios.post('http://192.168.100.5:5000/search', {
      filename: "",
      collection_name: "reverse_image_search",
      img_path: img_path,
      category: ""
    });

    const responseData = response.data;

    return responseData;
}
}
