import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';
import { Course } from './interface/course.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('CoursesService', 'GetCourses')
  async getCourses(data: { query: string }) {
    const courses = await this.appService.getCourses();
    return { courses };
  }

  @GrpcMethod('CoursesService', 'GetCourseById')
  async getCourseById(data: { id: string }) {
    const course = await this.appService.getCourseById(data.id);
    return { course };
  }

  @GrpcMethod('CoursesService', 'CreateCourse')
  async createCourse(data: { course: Course }) {
    const course = await this.appService.createCourse(data.course);
    return { course };
  }

  @GrpcMethod('CoursesService', 'UpdateCourse')
  async updateCourse(data: { id: string; course: Course }) {
    const course = await this.appService.updateCourse(data.id, data.course);
    return { course };
  }

  @GrpcMethod('CoursesService', 'DeleteCourse')
  async deleteCourse(data: { id: string }) {
    await this.appService.deleteCourse(data.id);
    return { message: 'Course deleted successfully' };
  }
}
