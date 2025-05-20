import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { Prisma } from 'generated/prisma';

export type StableWithPilotes = Prisma.StableGetPayload<{
  include: {
    pilote: true;
  };
}>;

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Récupère toutes les écuries avec leurs pilotes
   */
  async getStables(): Promise<StableWithPilotes[]> {
    const stables = await this.prisma.stable.findMany({
      include: {
        pilote: true,
      },
    });

    return stables;
  }

  /**
   * Récupère une écurie par son ID
   */
  async getStableById(id: string): Promise<StableWithPilotes | null> {
    const stable = await this.prisma.stable.findUnique({
      where: { id: id },
      include: {
        pilote: true,
      },
    });

    return stable;
  }

  /**
   * Crée une nouvelle écurie
   */
  async createStable(data: {
    name: string;
    location: string;
    image?: string;
    image_cover?: string;
  }): Promise<StableWithPilotes> {
    const stable = await this.prisma.stable.create({
      data: {
        name: data.name,
        location: data.location,
        image: data.image || '',
        image_cover: data.image_cover || '',
        pilotes: 0,
        how_many_tournaments: 0,
        how_many_wins: 0,
        how_many_losses: 0,
      },
      include: {
        pilote: true,
      },
    });

    return stable;
  }
}
