import { Test, TestingModule } from '@nestjs/testing';
import { JobsService } from '../src/jobs.service';
import { PrismaService } from '../src/services/prisma.service';
import { EmailService } from '../src/email.service';

describe('JobsService', () => {
  let service: JobsService;
  let prismaMock: {
    course: {
      findMany: jest.Mock;
      update: jest.Mock;
    };
    participation: {
      findMany: jest.Mock;
    };
  };
  let emailMock: {
    sendEmail: jest.Mock;
  };

  beforeEach(async () => {
    prismaMock = {
      course: {
        findMany: jest.fn().mockResolvedValue([
          {
            id: 'course1',
            name: 'Grand Prix Test',
            date: new Date(Date.now() + 5 * 60000), // dans 5 minutes
            notified: false,
          },
        ]),
        update: jest.fn().mockResolvedValue({}), // valeur fictive
      },
      participation: {
        findMany: jest.fn().mockResolvedValue([
          {
            pilote: {
              Stable: { email: 'test@stable.com' },
            },
          },
        ]),
      },
    };

    emailMock = {
      sendEmail: jest.fn().mockResolvedValue(true),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        JobsService,
        { provide: PrismaService, useValue: prismaMock },
        { provide: EmailService, useValue: emailMock },
      ],
    }).compile();

    service = module.get<JobsService>(JobsService);
  });

  it('devrait récupérer les courses à notifier et envoyer un email', async () => {
    await service.notifyStablesAboutUpcomingCourses();

    expect(prismaMock.course.findMany).toHaveBeenCalled();
    expect(prismaMock.participation.findMany).toHaveBeenCalled();
    expect(emailMock.sendEmail).toHaveBeenCalledWith(
      'test@stable.com',
      'La course Grand Prix Test commence bientôt !',
      'notificationCourse',
      expect.objectContaining({
        courseName: 'Grand Prix Test',
      }),
    );
    expect(prismaMock.course.update).toHaveBeenCalledWith({
      where: { id: 'course1' },
      data: { notified: true },
    });
  });
});
