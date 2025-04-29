import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { firstValueFrom } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('stables')
  async getStables(@Query('query') query: string) {
    return firstValueFrom(this.appService.getStables(query));
  }
}
