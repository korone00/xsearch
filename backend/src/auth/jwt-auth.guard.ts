import {Injectable} from '@nestjs/common'
import {AuthGuard} from 'passport-jwt'

@Injectable()
export class JwtAuthGuard extends AuthGuard{
    
}