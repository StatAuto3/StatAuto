import { Injectable } from '@nestjs/common';
import { PrismaService } from './services/prisma.service';
import { EmailService } from './email.service';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class JobsService {
  constructor(
    private prisma: PrismaService,
    private emailService: EmailService,
  ) {}

  // 🔔 Notifications de courses imminentes (toutes les minutes)
  @Cron(CronExpression.EVERY_MINUTE)
  async notifyStablesAboutUpcomingCourses() {
    const now = new Date();
    const rangeMinutes = 15;
    const from = now;
    const to = new Date(now.getTime() + rangeMinutes * 60000);

    const courses = await this.prisma.course.findMany({
      where: {
        date: {
          gte: from,
          lte: to,
        },
        notified: false,
      },
    });

    for (const course of courses) {
      const participations = await this.prisma.participation.findMany({
        where: { courseId: course.id },
        include: {
          pilote: {
            include: { Stable: true },
          },
        },
      });

      const stableEmails = new Set<string>();
      participations.forEach(({ pilote }) => {
        if (pilote.Stable?.email) stableEmails.add(pilote.Stable.email);
      });

      for (const email of stableEmails) {
        await this.emailService.sendEmail(
          email,
          `La course ${course.name} commence bientôt !`,
          'notificationCourse',
          {
            courseName: course.name,
            courseDate: course.date.toLocaleString(),
          },
        );
      }

      await this.prisma.course.update({
        where: { id: course.id },
        data: { notified: true },
      });
    }
  }

  // 📊 Rapport de performance hebdomadaire (chaque semaine)
  @Cron(CronExpression.EVERY_WEEK)
  async generateWeeklyPerformanceReports() {
    const stables = await this.prisma.stable.findMany({
      include: {
        pilote: {
          include: {
            courses: {          // ici c'est "courses" selon ton schéma (relation Participation[])
              include: { course: true },
            },
          },
        },
      },
    });

    for (const stable of stables) {
      type PiloteType = {
        name: string;
        courses: Array<{
          points: number;
          chrono?: number | null;
          course: { name: string; date: Date };
        }>;
      };

      const pilotesData = stable.pilote.map((pilote: PiloteType) => {
        const performances = pilote.courses.map((p) => ({
          course: p.course.name,
          date: p.course.date.toISOString().split('T')[0],
          points: p.points ?? 0,
          chrono: p.chrono ?? Infinity,
        }));

        const totalPoints = performances.reduce((sum, p) => sum + p.points, 0);

        const bestChrono = Math.min(...performances.map((p) => p.chrono));

        return {
          piloteName: pilote.name,
          performances,
          totalPoints,
          bestChrono: bestChrono === Infinity ? '-' : bestChrono,
        };
      });

      await this.emailService.sendEmail(
        stable.email,
        'Rapport de performance hebdomadaire',
        'performanceReport',
        {
          stableName: stable.name,
          pilotes: pilotesData,
        },
      );
    }
  }
}
