import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient, Participation, Pilote, Stable, Course } from '../../generated/prisma';

export type CourseWithDetails = Course & {
  participants: (Participation & {
    pilote: Pilote & {
      Stable: Stable | null;
    };
  })[];
};

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  async getCourseWithDetails(courseId: string): Promise<CourseWithDetails | null> {
    return this.course.findUnique({
      where: { id: courseId },
      include: {
        participants: {
          include: {
            pilote: {
              include: {
                Stable: true,
              },
            },
          },
        },
      },
    });
  }
}
