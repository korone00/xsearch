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
import { ConfigService,ConfigModule } from '@nestjs/config'

@Module({
    imports:[
        PassportModule,
        ConfigModule,
        JwtModule.registerAsync({
            imports:[ConfigModule],
            inject:[ConfigService],
            useFactory:async(config:ConfigService)=>({
//            secret: config.get(process.env.JWT_SECRET_KEY), // 여기는 이 방법이 안 돼서 백틱으로 감싼 형식으로 했더니 된다.
            secret:`${process.env.JWT_SECRET_KEY}`,
            signOptions:{expiresIn: `${process.env.ACCESS_TOKEN_EXPIRATION}`,}
            }),
        }),
        TypeOrmModule.forFeature([User]),
    ],
    controllers:[AuthController],
    providers:[AuthService, LocalStrategy, JwtStrategy,
        UserRepository, UserService,ConfigService]
})
export class AuthModule{}
