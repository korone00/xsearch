<<<<<<< HEAD
import { Controller,UseGuards,Post,Req, Get } from "@nestjs/common";
=======
import { Controller,UseGuards,Post,Req,Body } from "@nestjs/common";
>>>>>>> 2e4f254ab883e7e5cda6614aacb61e53a25be9b5
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./local-auth.guard";
import { User } from "src/users/entities/user.entity";

@Controller('auth')
export class AuthController{
    constructor(private readonly authService:AuthService){}
    @UseGuards(LocalAuthGuard) //login 실행하기 전, 필요한 작업 수행
    @Post('login')
    async login(@Req() req){
        return this.authService.login(req.user);
    }// 결과로 할당된 토큰 반환
<<<<<<< HEAD
    @Get('logout')
    async logout(@Req() req) {
        await this.authService.logout(req.user);
        return "Logout Success!";
    }

}

=======

    @Post('register')
    async registerAccount(@Body() user:User):Promise<any>{
        return await this.authService.registerUser(user);
    }
}
>>>>>>> 2e4f254ab883e7e5cda6614aacb61e53a25be9b5
