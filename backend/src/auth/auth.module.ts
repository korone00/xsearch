import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { UserRepository } from 'src/users/user.repository';
import { JwtModule } from "@nestjs/jwt";
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { UserService } from 'src/users/users.service';
<<<<<<< HEAD
import { RedisService,RedisModule } from 'nestjs-redis';
=======
>>>>>>> 001622d5983eb4af69a64092bd53fc6a4e7923ef

@Module({
    imports:[
        PassportModule,
        JwtModule.register({
            secret:'secretKey',
            signOptions:{expiresIn:'60s'},
        })
        ,
        TypeOrmModule.forFeature([User]),
        RedisModule
    ],
    controllers:[AuthController],
    providers:[AuthService, LocalStrategy,JwtStrategy,
<<<<<<< HEAD
        UserRepository,UserService, RedisService]
=======
        UserRepository,UserService]
>>>>>>> 001622d5983eb4af69a64092bd53fc6a4e7923ef

})
export class AuthModule{}