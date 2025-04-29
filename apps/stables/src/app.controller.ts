import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('StablesService', 'GetStables')
  getStables(data: { query: string }) {
    return this.appService.getStables(data.query);
  }
}
