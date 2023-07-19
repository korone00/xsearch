import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation } from '@nestjs/swagger/dist';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({summary:'hello world'})
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
