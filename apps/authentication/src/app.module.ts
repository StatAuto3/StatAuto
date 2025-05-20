import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [AppController],
  providers: [AppService, JwtService, PrismaService],
})
export class AppModule {}
