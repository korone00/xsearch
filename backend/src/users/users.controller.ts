import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './users.service';
import { User } from './entities/user.entity';
import { ApiOperation } from '@nestjs/swagger/dist';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}


  // @Post()
  // create(@Body() user: Partial<User>): Promise<User> {
  //   return this.userService.create(user);
  // }

  // @Put(':id')
  // update(@Param('id') id: number, @Body() user: Partial<User>): Promise<User> {
  //   return this.userService.update(id, user);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: number): Promise<void> {
  //   return this.userService.remove(id);
  // }
}
