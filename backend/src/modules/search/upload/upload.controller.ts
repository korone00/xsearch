import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { multerOptions } from './config';
import { ApiBody, ApiConsumes,  ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';


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
        file: { // 
          type: 'string',
          format: 'binary'
        },
      },
    },
  })
   @UseInterceptors(FilesInterceptor('file', null, multerOptions))

  
  async UploadFile(@UploadedFile() file:Express.Multer.File) {
    console.log(file);
    return { succ: true };
  }
}
