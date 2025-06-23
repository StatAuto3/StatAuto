import { Controller, UseGuards } from '@nestjs/common';
import { GrpcMethod, RpcException } from '@nestjs/microservices';
import { AppService } from './app.service';
import { AuthGuard } from './guards/auth.guard';
import { status } from '@grpc/grpc-js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('StablesService', 'GetStables')
  async getStables(data: { query: string }) {
    const stables = await this.appService.getStables();

    return {
      stables: stables.map((stable) => {
        // Calculer le total des points comme la somme des points de tous les pilotes
        const total_points = stable.pilote.reduce(
          (sum, pilote) => sum + pilote.points,
          0,
        );

        return {
          ...stable,
          pilote: stable.pilote || [],
          total_points,
          created_at:
            stable.createdAt?.toISOString() || new Date().toISOString(),
          updated_at:
            stable.updatedAt?.toISOString() || new Date().toISOString(),
        };
      }),
    };
  }

  @GrpcMethod('StablesService', 'GetStableById')
  async getStableById(data: { id: string }) {
    const stable = await this.appService.getStableById(data.id);

    if (!stable) {
      return { stable: null };
    }

    // Calculer le total des points comme la somme des points de tous les pilotes
    const total_points = stable.pilote.reduce(
      (sum, pilote) => sum + pilote.points,
      0,
    );

    return {
      stable: {
        ...stable,
        pilote: stable.pilote || [],
        total_points,
        created_at: stable.createdAt?.toISOString() || new Date().toISOString(),
        updated_at: stable.updatedAt?.toISOString() || new Date().toISOString(),
      },
    };
  }

  @GrpcMethod('StablesService', 'CreateStable')
  async createStable(data: {
    name: string;
    location: string;
    image?: string;
    image_cover?: string;
  }) {
    const stable = await this.appService.createStable(data);

    return {
      stable: {
        ...stable,
        pilote: stable.pilote || [],
        total_points: 0,
        created_at: stable.createdAt?.toISOString() || new Date().toISOString(),
        updated_at: stable.updatedAt?.toISOString() || new Date().toISOString(),
      },
    };
  }

  @GrpcMethod('StablesService', 'UpdateStable')
  @UseGuards(AuthGuard)
  async updateStable(
    data: {
      id: string;
      name?: string;
      location?: string;
      email?: string;
      password?: string;
      image?: string;
      image_cover?: string;
    },
    metadata: any,
  ) {
    const user = metadata.user;
    if (!user) {
      throw new RpcException({
        code: status.UNAUTHENTICATED,
        message: 'Vous devez être connecté pour modifier votre écurie',
      });
    }

    // Vérifier que l'utilisateur ne peut modifier que sa propre écurie
    if (data.id !== user.sub) {
      throw new RpcException({
        code: status.PERMISSION_DENIED,
        message: 'Vous ne pouvez modifier que votre propre écurie',
      });
    }

    const stable = await this.appService.updateStable(data, user.sub);

    // Calculer le total des points
    const total_points = stable.pilote.reduce(
      (sum, pilote) => sum + pilote.points,
      0,
    );

    return {
      stable: {
        ...stable,
        pilote: stable.pilote || [],
        total_points,
        created_at: stable.createdAt?.toISOString() || new Date().toISOString(),
        updated_at: stable.updatedAt?.toISOString() || new Date().toISOString(),
      },
      message: 'Écurie mise à jour avec succès',
    };
  }

  @GrpcMethod('StablesService', 'DeleteStable')
  @UseGuards(AuthGuard)
  async deleteStable(data: { id: string }, metadata: any) {
    const user = metadata.user;
    if (!user) {
      throw new RpcException({
        code: status.UNAUTHENTICATED,
        message: 'Vous devez être connecté pour supprimer votre écurie',
      });
    }

    // Vérifier que l'utilisateur ne peut supprimer que sa propre écurie
    if (data.id !== user.sub) {
      throw new RpcException({
        code: status.PERMISSION_DENIED,
        message: 'Vous ne pouvez supprimer que votre propre écurie',
      });
    }

    const result = await this.appService.deleteStable(data.id, user.sub);

    return {
      success: result.success,
      message: result.message,
    };
  }
}
