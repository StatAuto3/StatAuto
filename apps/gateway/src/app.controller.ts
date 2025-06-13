import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Query,
  UseGuards,
  Headers,
} from '@nestjs/common';
import { AppService } from './app.service';
import { firstValueFrom } from 'rxjs';
import { LoginRequest, RegisterRequest } from './types/auth.types';

// Un guard simple pour vérifier l'authentification dans le gateway
class AuthGuard {
  canActivate(context: any): boolean {
    const request = context.getRequest();
    const authHeader = request.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return false;
    }
    return true;
  }
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('login')
  async login(@Body() body: LoginRequest) {
    return firstValueFrom(this.appService.login(body));
  }

  @Post('register')
  async register(@Body() body: RegisterRequest) {
    return firstValueFrom(this.appService.register(body));
  }

  @Get('stables')
  async getStables(@Query('query') query: string) {
    return firstValueFrom(this.appService.getStables(query));
  }

  @Get('stable/:id')
  async getStableById(@Param('id') id: string) {
    return firstValueFrom(this.appService.getStableById(id));
  }

  // === ENDPOINTS PILOTES SÉCURISÉS ===

  @Get('pilotes')
  @UseGuards(AuthGuard)
  async getPilotes(
    @Query('query') query?: string,
    @Query('limit') limit?: string,
    @Query('offset') offset?: string,
    @Headers('authorization') authorization?: string,
  ) {
    if (!authorization || !authorization.startsWith('Bearer ')) {
      throw new Error("Token d'authentification requis");
    }

    return firstValueFrom(
      this.appService.getPilotes(
        {
          query,
          limit: limit ? parseInt(limit) : undefined,
          offset: offset ? parseInt(offset) : undefined,
        },
        authorization,
      ),
    );
  }

  @Get('pilote/:id')
  @UseGuards(AuthGuard)
  async getPiloteById(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
  ) {
    if (!authorization || !authorization.startsWith('Bearer ')) {
      throw new Error("Token d'authentification requis");
    }

    return firstValueFrom(this.appService.getPiloteById(id, authorization));
  }

  @Post('pilote')
  @UseGuards(AuthGuard)
  async createPilote(
    @Body()
    body: {
      name: string;
      age: number;
      gender: string;
      best_chrono_time: number;
      pilote_number: number;
    },
    @Headers('authorization') authorization?: string,
  ) {
    if (!authorization || !authorization.startsWith('Bearer ')) {
      throw new Error("Token d'authentification requis");
    }

    return firstValueFrom(this.appService.createPilote(body, authorization));
  }

  @Put('pilote/:id')
  @UseGuards(AuthGuard)
  async updatePilote(
    @Param('id') id: string,
    @Body()
    body: {
      name?: string;
      age?: number;
      gender?: string;
      best_chrono_time?: number;
      pilote_number?: number;
      points?: number;
    },
    @Headers('authorization') authorization?: string,
  ) {
    if (!authorization || !authorization.startsWith('Bearer ')) {
      throw new Error("Token d'authentification requis");
    }

    return firstValueFrom(
      this.appService.updatePilote({ ...body, id }, authorization),
    );
  }

  @Delete('pilote/:id')
  @UseGuards(AuthGuard)
  async deletePilote(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
  ) {
    if (!authorization || !authorization.startsWith('Bearer ')) {
      throw new Error("Token d'authentification requis");
    }

    return firstValueFrom(this.appService.deletePilote(id, authorization));
  }

  @Get('my-pilotes')
  @UseGuards(AuthGuard)
  async getMyPilotes(
    @Query('limit') limit?: string,
    @Query('offset') offset?: string,
    @Headers('authorization') authorization?: string,
  ) {
    if (!authorization || !authorization.startsWith('Bearer ')) {
      throw new Error("Token d'authentification requis");
    }

    return firstValueFrom(
      this.appService.getPilotesByStable(
        {
          limit: limit ? parseInt(limit) : undefined,
          offset: offset ? parseInt(offset) : undefined,
        },
        authorization,
      ),
    );
  }

  // === ENDPOINTS D'INSCRIPTION AUX COURSES SÉCURISÉS ===

  @Post('pilote/:piloteId/inscribe/:courseId')
  @UseGuards(AuthGuard)
  async inscribePiloteToCourse(
    @Param('piloteId') piloteId: string,
    @Param('courseId') courseId: string,
    @Headers('authorization') authorization?: string,
  ) {
    if (!authorization || !authorization.startsWith('Bearer ')) {
      throw new Error(
        "Token d'authentification requis pour inscrire un pilote",
      );
    }

    return firstValueFrom(
      this.appService.inscribePiloteToCourse(
        {
          pilote_id: piloteId,
          course_id: courseId,
        },
        authorization,
      ),
    );
  }

  @Post('inscribe-pilote')
  @UseGuards(AuthGuard)
  async inscribePiloteToCorseBody(
    @Body()
    body: {
      pilote_id: string;
      course_id: string;
    },
    @Headers('authorization') authorization?: string,
  ) {
    if (!authorization || !authorization.startsWith('Bearer ')) {
      throw new Error(
        "Token d'authentification requis pour inscrire un pilote",
      );
    }

    return firstValueFrom(
      this.appService.inscribePiloteToCourse(body, authorization),
    );
  }

  @Get('pilote/:id/inscriptions')
  @UseGuards(AuthGuard)
  async getPiloteInscriptions(
    @Param('id') id: string,
    @Query('limit') limit?: string,
    @Query('offset') offset?: string,
    @Headers('authorization') authorization?: string,
  ) {
    if (!authorization || !authorization.startsWith('Bearer ')) {
      throw new Error("Token d'authentification requis");
    }

    return firstValueFrom(
      this.appService.getPiloteInscriptions(
        {
          pilote_id: id,
          limit: limit ? parseInt(limit) : undefined,
          offset: offset ? parseInt(offset) : undefined,
        },
        authorization,
      ),
    );
  }

  @Get('course/:id/participants')
  @UseGuards(AuthGuard)
  async getCourseParticipants(
    @Param('id') id: string,
    @Query('limit') limit?: string,
    @Query('offset') offset?: string,
    @Headers('authorization') authorization?: string,
  ) {
    if (!authorization || !authorization.startsWith('Bearer ')) {
      throw new Error("Token d'authentification requis");
    }

    return firstValueFrom(
      this.appService.getCourseParticipants(
        {
          course_id: id,
          limit: limit ? parseInt(limit) : undefined,
          offset: offset ? parseInt(offset) : undefined,
        },
        authorization,
      ),
    );
  }

  @Delete('pilote/:piloteId/desinscribe/:courseId')
  @UseGuards(AuthGuard)
  async desinscribePiloteFromCourse(
    @Param('piloteId') piloteId: string,
    @Param('courseId') courseId: string,
    @Headers('authorization') authorization?: string,
  ) {
    if (!authorization || !authorization.startsWith('Bearer ')) {
      throw new Error(
        "Token d'authentification requis pour désinscrire un pilote",
      );
    }

    return firstValueFrom(
      this.appService.desinscribePiloteFromCourse(
        {
          pilote_id: piloteId,
          course_id: courseId,
        },
        authorization,
      ),
    );
  }

  @Get('my-inscriptions')
  @UseGuards(AuthGuard)
  async getMyPilotesInscriptions(
    @Query('limit') limit?: string,
    @Query('offset') offset?: string,
    @Headers('authorization') authorization?: string,
  ) {
    if (!authorization || !authorization.startsWith('Bearer ')) {
      throw new Error("Token d'authentification requis");
    }

    return firstValueFrom(
      this.appService.getMyPilotesInscriptions(
        {
          limit: limit ? parseInt(limit) : undefined,
          offset: offset ? parseInt(offset) : undefined,
        },
        authorization,
      ),
    );
  }
}
