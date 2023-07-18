import { Controller,UseGuards,Post,Req,Body } from "@nestjs/common";
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

    @Post('register')
    async registerAccount(@Body() user:User):Promise<any>{
        return await this.authService.registerUser(user);
    }
}