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
export class UserController {}
