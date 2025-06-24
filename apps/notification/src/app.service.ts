import { Injectable } from '@nestjs/common';
import { PrismaService } from './services/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async getCoursesStartingAround(minutesRange: number) {
    const now = new Date();
    const from = new Date(now.getTime() - minutesRange * 60000);
    const to = new Date(now.getTime() + minutesRange * 60000);

    return this.prisma.course.findMany({
      where: {
        date: {
          gte: from,
          lte: to,
        },
      },
    });
  }
}
