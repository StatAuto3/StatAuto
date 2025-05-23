import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';

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
}
