
import { Module } from "@nestjs/common";
import { uploadController } from "./upload.controller";
import { UploadService } from "./upload.service";


@Module({
    imports:[],
    providers:[UploadService],
    controllers:[uploadController]
})
export class UploadModule{

}