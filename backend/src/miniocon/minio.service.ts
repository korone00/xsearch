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

  async uploadFile(file: Express.Multer.File) {
    const fileName = `${Date.now()}-${file.originalname}`
    await this.minioClient.putObject(
      this.bucketName,
      fileName,
      file.buffer,
      file.size
    )
    return fileName
  }

  async getFileUrl(fileName: string) {
    return await this.minioClient.presignedUrl('GET', this.bucketName, fileName)
  }

  async deleteFile(fileName: string) {
    await this.minioClient.removeObject(this.bucketName, fileName)
  }
}