import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import {RequestWithIp} from './interfaces/Request';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hi')
  getHello(@Req() request: RequestWithIp): string {
    return this.appService.getHello(request.realIp);
  }
}
