import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MilvusClient } from '@zilliz/milvus2-sdk-node';
import { GetMilvusController } from './milvus.controller';
import { MilvusService } from './milvus.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 전역 설정으로 사용하기 위해 isGlobal: true로 설정
    }),
  ],
  controllers: [GetMilvusController],
  providers: [
    MilvusService,
  
    {
      provide: 'MILVUS_CLIENT', 
      useFactory: async (configService: ConfigService) => {
        const milvusClient = new MilvusClient({
          // uri: configService.get<string>('MILVUS_HOST'),
          username: configService.get<string>('MILVUS_USERNAME'),
          address: configService.get<string>('MILVUS_PORT'),
          password: configService.get<string>('MILVUS_PASSWORD'),
        });
        return milvusClient;
      },
      inject: [ConfigService],
    },
  ],
})
export class MilvusModule {}
