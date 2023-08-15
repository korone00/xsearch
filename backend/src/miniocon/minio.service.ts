import { Injectable, Inject } from '@nestjs/common'
import * as Minio from 'minio'
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class MinioService {
  private imageBucket: string;
  private queryBucket: string;

  constructor(private readonly configService: ConfigService, @Inject('MINIO') private minioClient: Minio.Client) {
    this.imageBucket = configService.get<string>('MINIO_IMAGE_BUCKET');
    this.queryBucket = configService.get<string>('MINIO_QUERY_BUCKET');
  }

  async uploadFile(file: Express.Multer.File): Promise<string> {
    const fileName = `${Date.now()}-${file.originalname}`; 
    const SERVER_ADDRESS = this.configService.get<string>('SERVER_ADDRESS');
    
    // save this image to minio queryBucket
    await this.minioClient.putObject(this.queryBucket, fileName, file.buffer);

    // Get URL for uploaded image
    const imageUrl = await this.minioClient.presignedUrl('GET', this.queryBucket, fileName, 24 * 60 * 60);
    
    const response = await axios.post(`http://${SERVER_ADDRESS}:5000/search`, {
      filename: "",
      collection_name: "reverse_image_search",
      img_path: imageUrl,
      category: ""
    });

    const responseData = response.data;

    return responseData;
  }

  async getFileUrl(fileName: string) {
    return await this.minioClient.presignedUrl('GET', this.queryBucket, fileName, 24 * 60 * 60)
  }

  async deleteFile(fileName: string) {
    await this.minioClient.removeObject(this.queryBucket, fileName)
  }
}
