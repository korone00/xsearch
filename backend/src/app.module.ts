import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { UserModule } from './users/users.modules';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '0927',
      database: 'xsearch',
      entities: [__dirname+'/**/*.entity.{ts,js}'], 
      synchronize: true,  //shouldn't be used in production - otherwise you can lose production data.
    }),
    UserModule,
    AuthModule
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}



//,
// RenderModule.forRoot({
//   engine: {
//     handlebars: new HandlebarsAdapter(),
//   },
//   options: {
//     viewsDir: join(__dirname, 'views'),
//   },
// })