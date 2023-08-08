import { Injectable, Inject } from '@nestjs/common'
import * as Minio from 'minio'
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MinioService {
  private bucketName: string

  constructor(private readonly configService: ConfigService, @Inject('MINIO') private minioClient: Minio.Client) {
    this.bucketName = configService.get<string>('MINIO_BUCKET_NAME')
  }

  async createBucketIfNotExists() {
    const bucketExists = await this.minioClient.bucketExists(this.bucketName)
    if (!bucketExists) {
      await this.minioClient.makeBucket(this.bucketName, 'eu-west-1')
    }
  }

  async uploadFile(file: Express.Multer.File): Promise<string> {
    const fileName = 'your-desired-file-name';
    const bucketName = 'your-bucket-name';

    await this.minioClient.putObject(bucketName, fileName, file.buffer);

    const url = await this.minioClient.presignedUrl('GET', bucketName, fileName, 24 * 60 * 60);

    return url;
  }

  async getFileUrl(fileName: string) {
    return await this.minioClient.presignedUrl('GET', this.bucketName, fileName)
  }

  async deleteFile(fileName: string) {
    await this.minioClient.removeObject(this.bucketName, fileName)
  }
}