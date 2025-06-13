import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { status } from '@grpc/grpc-js';
import { PrismaService } from './prisma/prisma.service';
import { Prisma } from 'generated/prisma';
import * as bcrypt from 'bcrypt';

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

  /**
   * Met à jour une écurie (sécurisé - seulement sa propre écurie)
   */
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
    userStableId: string,
  ): Promise<StableWithPilotes> {
    try {
      // Double vérification de sécurité : l'utilisateur ne peut modifier que sa propre écurie
      if (data.id !== userStableId) {
        throw new RpcException({
          code: status.PERMISSION_DENIED,
          message: 'Vous ne pouvez modifier que votre propre écurie',
        });
      }

      // Vérifier que l'écurie existe
      const existingStable = await this.prisma.stable.findUnique({
        where: { id: data.id },
      });

      if (!existingStable) {
        throw new RpcException({
          code: status.NOT_FOUND,
          message: 'Écurie non trouvée',
        });
      }

      // Si un email est fourni, vérifier qu'il n'est pas déjà utilisé par une autre écurie
      if (data.email && data.email !== existingStable.email) {
        const emailExists = await this.prisma.stable.findFirst({
          where: {
            email: data.email,
            NOT: {
              id: data.id,
            },
          },
        });

        if (emailExists) {
          throw new RpcException({
            code: status.ALREADY_EXISTS,
            message: 'Cet email est déjà utilisé par une autre écurie',
          });
        }
      }

      // Préparer les données de mise à jour
      const updateData: any = {};

      if (data.name) updateData.name = data.name;
      if (data.location) updateData.location = data.location;
      if (data.email) updateData.email = data.email;
      if (data.image !== undefined) updateData.image = data.image;
      if (data.image_cover !== undefined)
        updateData.image_cover = data.image_cover;

      // Hasher le nouveau mot de passe si fourni
      if (data.password) {
        updateData.password = await bcrypt.hash(data.password, 10);
      }

      // Effectuer la mise à jour
      const updatedStable = await this.prisma.stable.update({
        where: { id: data.id },
        data: updateData,
        include: {
          pilote: true,
        },
      });

      return updatedStable;
    } catch (error) {
      if (error instanceof RpcException) {
        throw error;
      }
      throw new RpcException({
        code: status.INTERNAL,
        message: "Erreur lors de la mise à jour de l'écurie",
      });
    }
  }

  /**
   * Supprime une écurie (sécurisé - seulement sa propre écurie)
   */
  async deleteStable(
    id: string,
    userStableId: string,
  ): Promise<{ success: boolean; message: string }> {
    try {
      // Double vérification de sécurité : l'utilisateur ne peut supprimer que sa propre écurie
      if (id !== userStableId) {
        throw new RpcException({
          code: status.PERMISSION_DENIED,
          message: 'Vous ne pouvez supprimer que votre propre écurie',
        });
      }

      // Vérifier que l'écurie existe
      const existingStable = await this.prisma.stable.findUnique({
        where: { id },
        include: {
          pilote: {
            include: {
              courses: true, // Inclure les participations aux courses
            },
          },
        },
      });

      if (!existingStable) {
        throw new RpcException({
          code: status.NOT_FOUND,
          message: 'Écurie non trouvée',
        });
      }

      // Vérifier s'il y a des pilotes inscrits à des courses
      const activePilotesWithCourses = existingStable.pilote.some(
        (pilote) => pilote.courses.length > 0,
      );

      if (activePilotesWithCourses) {
        throw new RpcException({
          code: status.FAILED_PRECONDITION,
          message:
            "Impossible de supprimer l'écurie : certains pilotes sont inscrits à des courses. Veuillez d'abord les désinscrire.",
        });
      }

      // Supprimer d'abord tous les pilotes de l'écurie (cascade)
      await this.prisma.pilote.deleteMany({
        where: {
          stableId: id,
        },
      });

      // Ensuite supprimer l'écurie
      await this.prisma.stable.delete({
        where: { id },
      });

      return {
        success: true,
        message: 'Écurie supprimée avec succès',
      };
    } catch (error) {
      if (error instanceof RpcException) {
        throw error;
      }
      throw new RpcException({
        code: status.INTERNAL,
        message: "Erreur lors de la suppression de l'écurie",
      });
    }
  }
}
