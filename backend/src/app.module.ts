import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { UserModule } from './users/users.modules';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
<<<<<<< HEAD
      password: '1234',
      database: 'postgres',
      entities: [User], 
=======
      password: '0927',
      database: 'xsearch',
      entities: [__dirname+'/**/*.entity.{ts,js}'], 
>>>>>>> 2e4f254ab883e7e5cda6614aacb61e53a25be9b5
      synchronize: true,  //shouldn't be used in production - otherwise you can lose production data.
    }),
    UserModule,
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