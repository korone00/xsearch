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
@Module({
    imports:[
        PassportModule,
        JwtModule.register({
            secret:'secretKey',
            signOptions:{expiresIn:'60s'},
        })
        ,
        TypeOrmModule.forFeature([User]),
    ],
    controllers:[AuthController],
    providers:[AuthService, LocalStrategy,JwtStrategy,UserRepository,UserService]


})
export class AuthModule{}