import { Module, Global } from '@nestjs/common';
import { MinioService } from './minio.service';
import { MinioController } from './minio.controller';
import { Client, ClientOptions } from 'minio';
import { Provider } from '@nestjs/common/interfaces';
import { ConfigService } from '@nestjs/config';
import { RawResponseDataService } from './rawresponsedata.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { rawResponseData } from 'src/users/entities/fileresponsedto.entity';
import { HistoryDataService } from './searchistory.serveice';
import { historyData } from 'src/users/entities/user.history';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([rawResponseData]),
    TypeOrmModule.forFeature([historyData]),
  ],
  providers: [
    {
      provide: 'MINIO',
      useFactory: (configService: ConfigService) => {
        const minioClientOptions: ClientOptions = {
          endPoint: configService.get<string>('MINIO_ENDPOINT'),
          port: Number(configService.get<string>('MINIO_PORT')),
          useSSL: configService.get<string>('MINIO_USE_SSL') === 'true',
          accessKey: configService.get<string>('MINIO_ACCESS_KEY'),
          secretKey: configService.get<string>('MINIO_SECRET_KEY'),
        };
        
        return new Client(minioClientOptions);
      },
      inject: [ConfigService],
    },
    MinioService,
    RawResponseDataService,
    HistoryDataService
  ],
  controllers: [MinioController],
  exports: [MinioService],
})
export class MinioModule {}
