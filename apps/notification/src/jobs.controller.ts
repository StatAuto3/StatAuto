// jobs.controller.ts
import { Controller, Get } from '@nestjs/common';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get('notify')
  async notify() {
    // Passe un nombre, pas une string
    await this.jobsService.notifyStablesAboutUpcomingCourses();
    return 'Notification sent';
  }
}
