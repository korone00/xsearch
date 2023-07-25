import { HttpException, HttpStatus, UploadedFile } from '@nestjs/common';
import { existsSync, mkdirSync } from 'fs';
import { diskStorage } from 'multer';
import  { extname } from 'path';
import {v1} from 'uuid'







function uuidRandom(file: Express.Multer.File) {
  const result = `${v1()}${extname(file.originalname)}`;
  return (result);
  
}


export const multerOptions = {
  
  fileFilter: (req:any, file:any, cb:any) => {
    
    if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
      cb(null, true); //allow storage of file
      
      
    } else {
      cb(
        new HttpException(
          `Unsupported file type ${extname(file.originalname)}`,
          HttpStatus.BAD_REQUEST,
        ),
        false,
      ); //file upload cannot format
    }
  },
  //storage properties
  storage: diskStorage({
    //destination storage path detail
    destination: (req, file, cb) => {
      const uploadPath = './uploads';
      if (!existsSync(uploadPath)) {
        mkdirSync(uploadPath);
      }
      cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
      cb(null, uuidRandom(file));
    },
    
  }),
};


