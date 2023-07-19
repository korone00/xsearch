import {Injectable,  HttpStatus, ForbiddenException,HttpException} from '@nestjs/common'
import { UserRepository } from 'src/users/user.repository';
import * as bcrypt from 'bcrypt'
import { JwtService } from "@nestjs/jwt";
import { UnauthorizedException } from '@nestjs/common';

import { UserService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService{
    constructor(
        private userRepository:UserRepository,
        private jwtService:JwtService,
        private userService:UserService,
        
    ){}
    async validateUser(id:string, password:string):Promise<any>{
        const user=await this.userRepository.findUserById(id);
        if(!user){
            throw new ForbiddenException({
                statusCode:HttpStatus.FORBIDDEN,
                message:[`아이디가 존재하지 않습니다. 회원가입을 시작하세요!`],
                error:'Forbidden'
            })
        }
        const matching=await bcrypt.compare(password,user.password);
        if(matching){
            const {password, ...result}=user;
            return result; // user의 정보가 password 뺴고 다 result에 담김
        }else{
            throw new ForbiddenException({
                statusCode:HttpStatus.FORBIDDEN,
                message:[`아이디 또는 비밀번호가 일치하지 않습니다.`],
                error:'Forbidden'
            })

        }
    }
    async invalidateAccessToken(user: any) {
        const accessToken = this.jwtService.sign({id: user.id, expiresIn: 0}); // expiresIn을 0으로 설정하여 토큰을 만료시킵니다.
        // await this.userService.updateUserToken(user.id, accessToken); // 데이터베이스에 만료된 토큰을 업데이트 합니다.
    }
    
    async login(userlogin:any){
        const user= await this.userRepository.findUserById(userlogin.id);
        const payload={id:user.id, name:user.name,email:user.email};
        return {
            accessToken:this.jwtService.sign(payload)
        };
    }


    // async logout(user: any) {
    //     const accessToken = this.jwtService.decode(user.accessToken);
    //     const expiresIn = accessToken['exp'];
    
    //     if (await this.redisService.getClient().set(`BlackList_${user.userId}`, 'loggedouted', 'EX', expiresIn)) {
    //       return true;
    //     } else {
    //       throw new UnauthorizedException();
    //     }
    // }

    async registerUser(newUser:User){
        let userExist=await this.userService.find(newUser);
        if(userExist){ // 중복 회원 검사
            throw new HttpException('이미 존재하는 회원아이디입니다.',HttpStatus.BAD_REQUEST);
        }
        const userRegister=await this.userService.save(newUser);
        if(!userRegister){ // 혹시 모를 회원가입 실패
            throw new HttpException('회원가입 오류',HttpStatus.INTERNAL_SERVER_ERROR);
    }
        return userRegister;
    }
}