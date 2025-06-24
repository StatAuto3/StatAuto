import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { PrismaService } from './services/prisma.service';
import { EmailService } from './email.service';
import { ReportsService } from 'report.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [PrismaService, EmailService, ReportsService],
})
export class AppModule {}
