import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt } from 'passport-jwt';
import { Strategy } from 'passport-local';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true, // 배포 시, false로 설정할 것.
      secretOrKey: config.get(process.env.JWT_SECRET_KEY), // 해결
    });
  }
  async validate(payload: any) {
    return { id: payload.id, name: payload.name, email: payload.email };
  }
}
