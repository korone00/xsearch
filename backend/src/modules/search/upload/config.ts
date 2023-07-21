import { HttpException, HttpStatus } from '@nestjs/common';
import { existsSync, mkdirSync } from 'fs';
import { diskStorage } from 'multer';
import { extname } from 'path';

export const multerConfig = {
  //dest: path save file upload
  dest: 'uploads',
};

function uuidRandom(file) {
  const result = `${Date.now}${extname(file.originalname)}`;
  return result;
}

export const multerOptions = {
  fileFilter: (req, file, cb) => {
    
    if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
      cb(null, true); //allow storage of file
      console.log("파일 업로드 성공");
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
      const uploadPath = multerConfig.dest;
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

