import { Module } from '@nestjs/common';
import { UserModule } from './users.modules';
import { UserService } from './users.service';
import { UserController } from './users.controller';

@Module({
  imports: [UserModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UserHttpModule {}
