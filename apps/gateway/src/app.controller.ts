import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { firstValueFrom } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('stables')
  async getStables(@Query('query') query: string) {
    return firstValueFrom(this.appService.getStables(query));
  }

  @Get('stable/:id')
  async getStableById(@Param('id') id: string) {
    return firstValueFrom(this.appService.getStableById(id));
  }
}
