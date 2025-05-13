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
}
