import { Controller,UseGuards,Post,Req, Get,Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./local-auth.guard";
import { User } from "src/users/entities/user.entity";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { ApiTags, ApiOperation, ApiCreatedResponse, ApiBearerAuth } from '@nestjs/swagger';
import { loginDto } from "src/users/entities/user.login";


@Controller('auth')
@ApiTags('auth API')
export class AuthController{
    constructor(private readonly authService:AuthService){}
    @ApiOperation({summary:'login API', description:'사용자 login'})
    @ApiCreatedResponse({description:'사용자 login'})
    @UseGuards(LocalAuthGuard) //login 실행하기 전, 필요한 작업 수행
    @Post('login')
    async login(@Body() userlogin:loginDto){// 원본은 @Req() req
        return this.authService.login(userlogin); //req.user 였음
    }// 결과로 할당된 토큰 반환

    @ApiOperation({summary:'register API', description:'사용자 register'})
    @ApiCreatedResponse({description:'사용자 register'})
    @Post('register')
    async registerAccount(@Body() user:User):Promise<any>{
        return await this.authService.registerUser(user);
    }
    
    @ApiOperation({summary:'logout API', description:'사용자 logout'})
    @ApiCreatedResponse({description:'사용자 logout'})
    @Get('logout')
    async logout(@Req() req) {
        //await this.authService.logout(req.user);
        return "Logout Success!";
        // res.redirect('/login'); // move to login.
    }
    
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    @ApiBearerAuth('access-token')
    @ApiOperation({summary:'profile API', description:'사용자 profile'})
    @ApiCreatedResponse({description:'사용자 profile'})
    userProfile(@Req() req){
        return req.user;
    }
}

