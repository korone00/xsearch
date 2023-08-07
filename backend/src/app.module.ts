import { Module ,Logger,MiddlewareConsumer,NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/users.modules';
import { AuthModule } from './auth/auth.module';
import { UploadModule } from './modules/search/upload/upload.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DateController } from './modules/date/date.controller';
import { MinioModule } from "./miniocon/minio.module"; // Import the MinioModule
import { LoggerMiddleware } from './modules/logging/logger.middleware';
import { MilvusModule } from "./milvuscon/milvus.module"; // Import the MilvusModule



@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true, // allow to all modules to use ConfigService
    }),
    UploadModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: parseInt(configService.get<string>('DB_PORT')),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [__dirname + '/**/*.entity.{ts,js}'],
        synchronize: true,
      }),
    }),
    UserModule,
    AuthModule,
    MinioModule,
    // MilvusModule
  ],

  
  controllers: [AppController,DateController],
  providers: [AppService],

})
export class AppModule {}

// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(LoggerMiddleware).forRoutes('*');
//   }
// }