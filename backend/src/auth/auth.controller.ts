import { Controller,UseGuards,Post,Req, Get } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./local-auth.guard";
import { User } from "src/users/entities/user.entity";
import { JwtAuthGuard } from "./jwt-auth.guard";

@Controller('auth')
export class AuthController{
    constructor(private readonly authService:AuthService){}
    @UseGuards(LocalAuthGuard) //login 실행하기 전, 필요한 작업 수행
    @Post('login')
    async login(@Req() req){
        return this.authService.login(req.user);
    }// 결과로 할당된 토큰 반환
    
    @Get('logout')
    async logout(@Req() req) {
        //await this.authService.logout(req.user);
        return "Logout Success!";
    }
    
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    userProfile(@Req() req){
        return req.user;
    }
}

