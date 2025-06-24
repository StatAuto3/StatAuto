import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from './guards/auth.guard';

@Controller('courses')
export class AppController {
  @Post('details')
  @UseGuards(AuthGuard)
  async getCourseDetails(
    @Body() data: { courseId: string }
  ): Promise<{ message: string }> {
    const { courseId } = data;
    return { message: `Détails pour le courseId ${courseId}` };
  }
}
