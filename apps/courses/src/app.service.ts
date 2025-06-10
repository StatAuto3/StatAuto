import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async getCourses() {
    return this.prisma.course.findMany();
  }
}
