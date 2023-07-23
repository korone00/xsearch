import {
  Controller,
  UseGuards,
  Post,
  Req,
  Get,
  Body,
  Res,
  Query,
  Put,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { User } from 'src/users/entities/user.entity';
import { JwtAuthGuard } from './jwt-auth.guard';
import {
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { UserDto } from 'src/users/entities/user.userdto';
import { Response } from 'express';
import { RoleGuard } from './role.guard';
import { Roles } from './roles';
import { UpdateUserDto } from 'src/users/entities/user.updatedto';

@Controller('auth')
@ApiTags('auth API')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @ApiOperation({ summary: 'login API', description: '사용자 login' })
  @ApiCreatedResponse({ description: '사용자 login' })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() userlogin: UserDto, @Res() response: Response) {
    const token = await this.authService.login(userlogin);
    response.setHeader('Authorization', 'Bearer' + token.accessToken); //그냥 token으로 주면 Bearer가 붙지 않음
    response.cookie('jwt', token.accessToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    response.send(token);
  } //new version

  @ApiOperation({ summary: 'register API', description: '사용자 register' })
  @ApiCreatedResponse({ description: '사용자 register' })
  @Post('register')
  async registerAccount(@Body() user: User): Promise<any> {
    return await this.authService.registerUser(user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'logout API', description: '사용자 logout' })
  @ApiCreatedResponse({ description: '사용자 logout' })
  async logOut(@Req() req: Request, @Res() res: Response) {
    res.cookie('jwt', '', {
      maxAge: 0,
    });
    return res.status(200).send('로그아웃 성공. 다시 로그인 하세요');
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'profile API', description: '사용자 profile' })
  @ApiCreatedResponse({ description: '사용자 profile' })
  userProfile(@Req() req) {
    return req.user;
  }
  @Roles('admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'userList API',
    description: '사용자 전체 목록 (only for Admin)',
  })
  @ApiCreatedResponse({ description: '사용자 전체 목록' })
  @Get('userlist')
  async getUserList(@Query('page') page: number = 1): Promise<User[]> {
    return await this.authService.paginate(page);
  }
  @UseGuards(LocalAuthGuard)
  @ApiOperation({
    summary: 'delete API',
    description: '사용자 탈퇴(계정 삭제)',
  })
  @ApiCreatedResponse({ description: '사용자 탈퇴' })
  @Post('delete')
  deleteUser(@Body() userDelete: UserDto) {
    this.authService.deleteUser(userDelete.id);
    return `${userDelete.id}님 계정 삭제 완료`;
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'modify API',
    description: '사용자 정보 수정',
  })
  @ApiCreatedResponse({ description: '사용자 정보 수정' })
  @Put('modify') // not using parameters
  async modifyUser(
    @Req() req,
    @Body() modifyInfo: UpdateUserDto,
  ): Promise<User> {
    // 수정된 객체 반환
    return await this.authService.modify(req.user.id, modifyInfo);
  }
}
