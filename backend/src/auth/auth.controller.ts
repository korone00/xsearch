import { Controller, Get, Response } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response as Res } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly appService: AuthService) {}

  @Get('/login')
  login(@Response() res: Res) {
    return res.render('login');
  }

  @Get('/logout')
  logout(@Response() res: Res) {
    return res.render('logout');
  }
}
