import { Controller, Post, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { FilesInterceptor } from "@nestjs/platform-express";
import { multerOptions } from "./config";

@Controller('upload')
export class uploadController{
    @Post()
    @UseInterceptors(FilesInterceptor('file',null,multerOptions))
    async uploadfile(@UploadedFiles() file){
        console.log(file)
    };
}
