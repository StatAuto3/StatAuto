import { Injectable } from '@nestjs/common';
import { PrismaService } from './services/prisma.service';
import { EmailService } from './email.service';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class ReportsService {
  constructor(
    private prisma: PrismaService,
    private emailService: EmailService,
  ) {}

  // Méthode pour envoyer le rapport hebdo pour un pilote
  private async sendPerformanceReport(piloteId: string) {
    const pilote = await this.prisma.pilote.findUnique({
      where: { id: piloteId },
      select: {
        name: true,
        points: true,
        best_chrono_time: true,
        Stable: { select: { email: true, name: true } },
      },
    });

    if (!pilote) return;

    const context = {
      piloteName: pilote.name,
      points: pilote.points,
      bestChrono: pilote.best_chrono_time,
      stableName: pilote.Stable?.name ?? 'Écurie inconnue',
    };

    if (pilote.Stable?.email) {
      await this.emailService.sendEmail(
        pilote.Stable.email,
        `Rapport hebdomadaire de performance pour ${pilote.name}`,
        'performanceReport',
        context,
      );
      console.log(`Rapport hebdo envoyé à ${pilote.Stable.email}`);
    }
  }

  // Cron job hebdomadaire le lundi à 8h00
  @Cron('0 8 * * 1')
  async sendWeeklyReports() {
    console.log('Début génération rapports hebdomadaires');

    // Récupérer tous les pilotes
    const pilotes = await this.prisma.pilote.findMany({
      select: { id: true },
    });

    // Pour chaque pilote, envoyer le rapport
    for (const pilote of pilotes) {
      await this.sendPerformanceReport(pilote.id);
    }

    console.log('Fin génération rapports hebdomadaires');
  }
}
