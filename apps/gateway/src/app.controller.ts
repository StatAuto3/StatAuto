import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { firstValueFrom } from 'rxjs';
import { LoginRequest, RegisterRequest } from './types/auth.types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('login')
  async login(@Body() body: LoginRequest) {
    return firstValueFrom(this.appService.login(body));
  }

  @Post('register')
  async register(@Body() body: RegisterRequest) {
    return firstValueFrom(this.appService.register(body));
  }

  @Get('stables')
  async getStables(@Query('query') query: string) {
    return firstValueFrom(this.appService.getStables(query));
  }

  @Get('stable/:id')
  async getStableById(@Param('id') id: string) {
    return firstValueFrom(this.appService.getStableById(id));
  }
}
