import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { GetPiloteIdResponse, GetPilotesResponse } from '../types/GetPilotesResponse.type';
@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllPilote(): Promise<GetPilotesResponse> {
     const pilotes = await this.prisma.pilote.findMany({});
     return { pilotes };
  }

  async getPiloteById(id : string): Promise<GetPiloteIdResponse> {
    const pilote = await this.prisma.pilote.findUnique({
      where: {
        id
      }
    })
    return { pilote }
  }
}
