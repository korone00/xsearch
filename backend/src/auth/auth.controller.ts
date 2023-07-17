import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly appService: AuthService) {}

  @Get('/login')
  login() {
    return this.appService.login();
  }

  @Get('/logout')
  logout() {
    return this.appService.logout();
  }
}
