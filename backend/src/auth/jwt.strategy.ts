import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt } from 'passport-jwt';
//import { Strategy } from 'passport-local';
import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { UserRepository } from 'src/users/user.repository';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly config: ConfigService,
    private readonly userRepository:UserRepository
    ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true, // 배포 시, false로 설정할 것.
      secretOrKey: config.get<String>('JWT_SECRET_KEY'), // 해결
    });
  }
  async validate(payload: any) {
    const user= await this.userRepository.findUserById(payload.id);
    return user;
  }
}
