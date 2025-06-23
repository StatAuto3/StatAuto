import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('AuthenticationService', 'Register')
  async register(data: RegisterDto): Promise<{ token: string }> {
    try {
      const result = await this.appService.register(data);
      return result;
    } catch (error) {
      throw error;
    }
  }

  @GrpcMethod('AuthenticationService', 'Login')
  async login(data: LoginDto): Promise<{ token: string }> {
    return this.appService.login(data);
  }
}
