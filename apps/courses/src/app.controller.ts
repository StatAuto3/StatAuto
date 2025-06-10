import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('CoursesService', 'GetCourses')
  async getCourses(data: { query: string }) {
    const courses = await this.appService.getCourses();

    return { courses };
  }
}
