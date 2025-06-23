import { Injectable } from '@nestjs/common';
import { Course } from './interface/course.interface';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getCourses(): Promise<Course[]> {
    const courses = await this.prisma.course.findMany({
      include: {
        participants: true,
      },
    });
    return courses;
  }

  async getCourseById(id: string): Promise<Course> {
    const course = await this.prisma.course.findUnique({
      where: { id },
      include: { participants: true },
    });
    return course;
  }

  async createCourse(course: Course): Promise<Course> {
    const newCourse = await this.prisma.course.create({
      data: {
        name: course.name,
        image: course.image,
        date: course.date,
        nb_tours: course.nb_tours,
        participants: {
          create: course.participants,
        },
      },
      include: { participants: true },
    });
    return newCourse;
  }

  async updateCourse(id: string, course: Course): Promise<Course> {
    const updatedCourse = await this.prisma.course.update({
      where: { id },
      data: {
        name: course.name,
        image: course.image,
        date: course.date,
        nb_tours: course.nb_tours,
        participants: {
          create: course.participants,
        },
      },
      include: { participants: true },
    });
    return updatedCourse;
  }

  async deleteCourse(id: string): Promise<void> {
    await this.prisma.course.delete({
      where: { id },
    });
  }
}
