import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('AuthenticationService', 'Register')
  async register(request: RegisterDto) {
    return this.appService.register(request);
  }

  @GrpcMethod('AuthenticationService', 'Login')
  async login(request: LoginDto) {
    return this.appService.login(request);
  }
}
