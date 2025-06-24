import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Patch,
  Delete,
  Query,
  UseGuards,
  Headers,
  Injectable,
  CanActivate,
  ExecutionContext,
} from '@nestjs/common';
import { AppService } from './app.service';
import { firstValueFrom } from 'rxjs';
import { LoginRequest, RegisterRequest } from '../types/auth.type';

// Un guard simple pour vérifier l'authentification dans le gateway
@Injectable()
class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
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
  @UseGuards(AuthGuard)
  async getStableById(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
  ) {
    if (!authorization || !authorization.startsWith('Bearer ')) {
      throw new Error(
        "Token d'authentification requis pour voir les détails de cette écurie",
      );
    }

    return firstValueFrom(this.appService.getStableById(id, authorization));
  }

  // === ENDPOINTS ÉCURIES SÉCURISÉS ===

  @Put('stable/:id')
  @UseGuards(AuthGuard)
  async updateStable(
    @Param('id') id: string,
    @Body()
    body: {
      name?: string;
      location?: string;
      email?: string;
      password?: string;
      image?: string;
      image_cover?: string;
    },
    @Headers('authorization') authorization?: string,
  ) {
    if (!authorization || !authorization.startsWith('Bearer ')) {
      throw new Error(
        "Token d'authentification requis pour modifier votre écurie",
      );
    }

    return firstValueFrom(
      this.appService.updateStable({ ...body, id }, authorization),
    );
  }

  @Patch('stable/:id')
  @UseGuards(AuthGuard)
  async patchStable(
    @Param('id') id: string,
    @Body()
    body: {
      name?: string;
      location?: string;
      email?: string;
      password?: string;
      image?: string;
      image_cover?: string;
    },
    @Headers('authorization') authorization?: string,
  ) {
    if (!authorization || !authorization.startsWith('Bearer ')) {
      throw new Error(
        "Token d'authentification requis pour modifier votre écurie",
      );
    }

    return firstValueFrom(
      this.appService.updateStable({ ...body, id }, authorization),
    );
  }

  @Delete('stable/:id')
  @UseGuards(AuthGuard)
  async deleteStable(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
  ) {
    if (!authorization || !authorization.startsWith('Bearer ')) {
      throw new Error(
        "Token d'authentification requis pour supprimer votre écurie",
      );
    }

    return firstValueFrom(this.appService.deleteStable(id, authorization));
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

  @Get('courses')
  @UseGuards(AuthGuard)
  async getCourses(@Headers('authorization') authorization?: string) {
    if (!authorization || !authorization.startsWith('Bearer ')) {
      throw new Error("Token d'authentification requis");
    }

    return firstValueFrom(this.appService.getCourses(authorization));
  }

  @Get('course/:id')
  @UseGuards(AuthGuard)
  async getCourseById(
    @Param('id') id: string,
    @Headers('authorization') authorization?: string,
  ) {
    return firstValueFrom(this.appService.getCourseById(authorization, id));
  }
}
