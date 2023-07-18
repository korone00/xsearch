import {Injectable,  HttpStatus, ForbiddenException} from '@nestjs/common'
import { UserRepository } from 'src/users/user.repository';
import * as bcrypt from 'bcrypt'
import { JwtService } from "@nestjs/jwt";
import { RedisService } from 'nestjs-redis';
import { UnauthorizedException } from '@nestjs/common';


@Injectable()
export class AuthService{
    constructor(
        private userRepository:UserRepository,
        private jwtService:JwtService,
        private redisService: RedisService
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
        //const matching=await bcrypt.compare(password,user.password);
        var matching=false;
        if(password==user.password) matching=true 
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
    async login(user:any){
        const payload={id:user.id, name:user.name,email:user.email};
        return {
            accessToken:this.jwtService.sign(payload)
        };
    }

    async logout(user: any) {
        const accessToken = this.jwtService.decode(user.accessToken);
        const expiresIn = accessToken['exp'];
    
        if (await this.redisService.getClient().set(`BlackList_${user.userId}`, 'loggedouted', 'EX', expiresIn)) {
          return true;
        } else {
          throw new UnauthorizedException();
        }
    }


}