import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';
import { GetPiloteIdResponse, GetPilotesResponse } from '../types/GetPilotesResponse.type';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('PilotesService', 'GetPilotes')
  async getAllPilote(): Promise<GetPilotesResponse> {
    return this.appService.getAllPilote();
  }

  @GrpcMethod('PilotesService', 'GetPiloteById')
  async getPiloteById(id: string): Promise<GetPiloteIdResponse> {
    return this.appService.getPiloteById(id);
  }
}
