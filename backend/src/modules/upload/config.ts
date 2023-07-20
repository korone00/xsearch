import { HttpException, HttpStatus } from '@nestjs/common';
import { existsSync, mkdirSync } from 'fs';
import { diskStorage } from 'multer';
import { extname } from 'path';

export const multerConfig = {
  //dest: path save file upload
  dest: 'uploads',
};

function uuidRandom(file) {
  const result = `${uuid()}${extname(file.originalname)}`;
  return result;
}

export const multerOptions = {
  fileFilter: (req: any, file: any, cb: any) => {
    if (file.mimetype.match(/\/(jpg|jpeg|png|gif)%/)) {
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
    destination: (req: any, file: any, cb: any) => {
      const uploadPath = multerConfig.dest;
      if (!existsSync(uploadPath)) {
        mkdirSync(uploadPath);
      }
      cb(null, uploadPath);
    },
    filename: (req: any, file: any, cb: any) => {
      cb(null, uuidRandom(file));
    },
  }),
};

function uuid() {
  throw new Error('Function not implemented.');
}
