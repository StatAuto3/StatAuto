import { Controller, UseGuards } from '@nestjs/common';
import { GrpcMethod, RpcException } from '@nestjs/microservices';
import { AppService } from './app.service';
import { AuthGuard } from './guards/auth.guard';
import { status } from '@grpc/grpc-js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('PilotesService', 'GetPilotes')
  @UseGuards(AuthGuard)
  async getPilotes(
    data: {
      query?: string;
      stable_id?: string;
      limit?: number;
      offset?: number;
    },
    metadata: any,
  ) {
    const user = metadata.user;
    if (!user) {
      throw new RpcException({
        code: status.UNAUTHENTICATED,
        message: 'Vous devez être connecté pour voir les pilotes',
      });
    }

    // Si stable_id est fourni et différent de l'utilisateur connecté, on refuse
    if (data.stable_id && data.stable_id !== user.sub) {
      throw new RpcException({
        code: status.PERMISSION_DENIED,
        message: 'Vous ne pouvez voir que vos propres pilotes',
      });
    }

    // Forcer la recherche sur la propre écurie de l'utilisateur
    const searchData = { ...data, stable_id: user.sub };
    return this.appService.getPilotes(searchData);
  }

  @GrpcMethod('PilotesService', 'GetPiloteById')
  @UseGuards(AuthGuard)
  async getPiloteById(data: { id: string }, metadata: any) {
    const user = metadata.user;
    if (!user) {
      throw new RpcException({
        code: status.UNAUTHENTICATED,
        message: 'Vous devez être connecté pour voir ce pilote',
      });
    }

    return this.appService.getPiloteById(data.id, user.sub);
  }

  @GrpcMethod('PilotesService', 'CreatePilote')
  @UseGuards(AuthGuard)
  async createPilote(
    data: {
      name: string;
      age: number;
      gender: string;
      best_chrono_time: number;
      pilote_number: number;
    },
    metadata: any,
  ) {
    const user = metadata.user;
    if (!user) {
      throw new RpcException({
        code: status.UNAUTHENTICATED,
        message: 'Vous devez être connecté pour créer un pilote',
      });
    }

    // Ajouter l'ID de l'écurie de l'utilisateur connecté
    const createData = { ...data, stable_id: user.sub };
    return this.appService.createPilote(createData);
  }

  @GrpcMethod('PilotesService', 'UpdatePilote')
  @UseGuards(AuthGuard)
  async updatePilote(
    data: {
      id: string;
      name?: string;
      age?: number;
      gender?: string;
      best_chrono_time?: number;
      pilote_number?: number;
      points?: number;
    },
    metadata: any,
  ) {
    const user = metadata.user;
    if (!user) {
      throw new RpcException({
        code: status.UNAUTHENTICATED,
        message: 'Vous devez être connecté pour modifier un pilote',
      });
    }

    return this.appService.updatePilote(data, user.sub);
  }

  @GrpcMethod('PilotesService', 'DeletePilote')
  @UseGuards(AuthGuard)
  async deletePilote(data: { id: string }, metadata: any) {
    const user = metadata.user;
    if (!user) {
      throw new RpcException({
        code: status.UNAUTHENTICATED,
        message: 'Vous devez être connecté pour supprimer un pilote',
      });
    }

    return this.appService.deletePilote(data.id, user.sub);
  }

  @GrpcMethod('PilotesService', 'GetPilotesByStable')
  @UseGuards(AuthGuard)
  async getPilotesByStable(
    data: { stable_id?: string; limit?: number; offset?: number },
    metadata: any,
  ) {
    const user = metadata.user;
    if (!user) {
      throw new RpcException({
        code: status.UNAUTHENTICATED,
        message: 'Vous devez être connecté pour voir les pilotes',
      });
    }

    // Si stable_id est fourni et différent de l'utilisateur connecté, on refuse
    if (data.stable_id && data.stable_id !== user.sub) {
      throw new RpcException({
        code: status.PERMISSION_DENIED,
        message: 'Vous ne pouvez voir que vos propres pilotes',
      });
    }

    // Forcer la recherche sur la propre écurie de l'utilisateur
    const searchData = { ...data, stable_id: user.sub };
    return this.appService.getPilotesByStable(searchData);
  }

  // === ENDPOINTS D'INSCRIPTION AUX COURSES ===

  @GrpcMethod('PilotesService', 'InscribePiloteToCourse')
  @UseGuards(AuthGuard)
  async inscribePiloteToCourse(
    data: {
      pilote_id: string;
      course_id: string;
    },
    metadata: any,
  ) {
    const user = metadata.user;
    if (!user) {
      throw new RpcException({
        code: status.UNAUTHENTICATED,
        message:
          'Vous devez être connecté pour inscrire un pilote à une course',
      });
    }

    return this.appService.inscribePiloteToCourse(data, user.sub);
  }

  @GrpcMethod('PilotesService', 'GetPiloteInscriptions')
  @UseGuards(AuthGuard)
  async getPiloteInscriptions(
    data: {
      pilote_id: string;
      limit?: number;
      offset?: number;
    },
    metadata: any,
  ) {
    const user = metadata.user;
    if (!user) {
      throw new RpcException({
        code: status.UNAUTHENTICATED,
        message:
          "Vous devez être connecté pour voir les inscriptions d'un pilote",
      });
    }

    return this.appService.getPiloteInscriptions(data, user.sub);
  }

  @GrpcMethod('PilotesService', 'GetCourseParticipants')
  @UseGuards(AuthGuard)
  async getCourseParticipants(
    data: {
      course_id: string;
      limit?: number;
      offset?: number;
    },
    metadata: any,
  ) {
    const user = metadata.user;
    if (!user) {
      throw new RpcException({
        code: status.UNAUTHENTICATED,
        message:
          "Vous devez être connecté pour voir les participants d'une course",
      });
    }

    return this.appService.getCourseParticipants(data);
  }

  @GrpcMethod('PilotesService', 'DesinscribePiloteFromCourse')
  @UseGuards(AuthGuard)
  async desinscribePiloteFromCourse(
    data: {
      pilote_id: string;
      course_id: string;
    },
    metadata: any,
  ) {
    const user = metadata.user;
    if (!user) {
      throw new RpcException({
        code: status.UNAUTHENTICATED,
        message:
          "Vous devez être connecté pour désinscrire un pilote d'une course",
      });
    }

    return this.appService.desinscribePiloteFromCourse(data, user.sub);
  }

  @GrpcMethod('PilotesService', 'GetMyPilotesInscriptions')
  @UseGuards(AuthGuard)
  async getMyPilotesInscriptions(
    data: {
      limit?: number;
      offset?: number;
    },
    metadata: any,
  ) {
    const user = metadata.user;
    if (!user) {
      throw new RpcException({
        code: status.UNAUTHENTICATED,
        message: 'Vous devez être connecté pour voir vos inscriptions',
      });
    }

    return this.appService.getMyPilotesInscriptions(data, user.sub);
  }
}
