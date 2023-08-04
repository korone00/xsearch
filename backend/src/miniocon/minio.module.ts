import { Module, Global } from '@nestjs/common';
import { MinioService } from './minio.service';
import { MinioController } from './minio.controller';
import { Client, ClientOptions } from 'minio';
import { Provider } from '@nestjs/common/interfaces';
import { truncate } from 'fs/promises';

const minioClientOptions: ClientOptions = {
  endPoint: 'localhost',
  port: 9000,
  useSSL: true,
  accessKey: 'admin',
  secretKey: 'sodeimmcd',
};

const minioProvider: Provider = {
  provide: 'MINIO',
  useValue: new Client(minioClientOptions),
};

@Global()
@Module({
  providers: [minioProvider, MinioService],
  controllers: [MinioController],
  exports: [MinioService],
})
export class MinioModule {}
