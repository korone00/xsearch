import {Injectable} from '@nestjs/common'
import {PassportStrategy} from '@nestjs/passport'
import {Strategy} from 'passport-local'
import {ExtractJwt} from 'passport-jwt'
@Injectable()

export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:true, // 배포 시, false로 설정할 것.
            secretOrKey:'secretKey'
        })
    }
    async validate(payload:any){
        return {id:payload.id,name:payload.name, email:payload.email};
        
    }
}