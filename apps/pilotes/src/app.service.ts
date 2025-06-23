import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { status } from '@grpc/grpc-js';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getPilotes(data: {
    query?: string;
    stable_id: string;
    limit?: number;
    offset?: number;
  }) {
    try {
      const pilotes = await this.prisma.pilote.findMany({
        where: {
          stableId: data.stable_id,
          ...(data.query && {
            name: {
              contains: data.query,
              mode: 'insensitive',
            },
          }),
        },
        take: data.limit || 10,
        skip: data.offset || 0,
        orderBy: {
          name: 'asc',
        },
      });

      const total = await this.prisma.pilote.count({
        where: {
          stableId: data.stable_id,
          ...(data.query && {
            name: {
              contains: data.query,
              mode: 'insensitive',
            },
          }),
        },
      });

      return {
        pilotes: pilotes.map((pilote) => ({
          ...pilote,
          stable_id: pilote.stableId,
        })),
        total,
      };
    } catch (error) {
      throw new RpcException({
        code: status.INTERNAL,
        message: 'Erreur lors de la récupération des pilotes',
      });
    }
  }

  async getPiloteById(id: string, stableId: string) {
    try {
      const pilote = await this.prisma.pilote.findFirst({
        where: {
          id,
          stableId, // Sécurité : seuls les pilotes de la propre écurie
        },
      });

      if (!pilote) {
        throw new RpcException({
          code: status.NOT_FOUND,
          message:
            "Pilote non trouvé ou vous n'avez pas l'autorisation de le voir",
        });
      }

      return {
        pilote: {
          ...pilote,
          stable_id: pilote.stableId,
        },
      };
    } catch (error) {
      if (error instanceof RpcException) {
        throw error;
      }
      throw new RpcException({
        code: status.INTERNAL,
        message: 'Erreur lors de la récupération du pilote',
      });
    }
  }

  async createPilote(data: {
    name: string;
    stable_id: string;
    age: number;
    gender: string;
    best_chrono_time: number;
    pilote_number: number;
  }) {
    try {
      // Vérifier si le numéro de pilote est déjà utilisé dans cette écurie
      const existingPilote = await this.prisma.pilote.findFirst({
        where: {
          stableId: data.stable_id,
          pilote_number: data.pilote_number,
        },
      });

      if (existingPilote) {
        throw new RpcException({
          code: status.ALREADY_EXISTS,
          message: 'Ce numéro de pilote est déjà utilisé dans votre écurie',
        });
      }

      const pilote = await this.prisma.pilote.create({
        data: {
          name: data.name,
          stableId: data.stable_id,
          age: data.age,
          gender: data.gender,
          best_chrono_time: data.best_chrono_time,
          pilote_number: data.pilote_number,
        },
      });

      return {
        pilote: {
          ...pilote,
          stable_id: pilote.stableId,
        },
        message: 'Pilote créé avec succès',
      };
    } catch (error) {
      if (error instanceof RpcException) {
        throw error;
      }
      throw new RpcException({
        code: status.INTERNAL,
        message: 'Erreur lors de la création du pilote',
      });
    }
  }

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
    stableId: string,
  ) {
    try {
      // Vérifier que le pilote appartient à l'écurie
      const existingPilote = await this.prisma.pilote.findFirst({
        where: {
          id: data.id,
          stableId,
        },
      });

      if (!existingPilote) {
        throw new RpcException({
          code: status.NOT_FOUND,
          message:
            "Pilote non trouvé ou vous n'avez pas l'autorisation de le modifier",
        });
      }

      // Si le numéro de pilote change, vérifier qu'il n'est pas déjà utilisé
      if (
        data.pilote_number &&
        data.pilote_number !== existingPilote.pilote_number
      ) {
        const numberConflict = await this.prisma.pilote.findFirst({
          where: {
            stableId,
            pilote_number: data.pilote_number,
            NOT: {
              id: data.id,
            },
          },
        });

        if (numberConflict) {
          throw new RpcException({
            code: status.ALREADY_EXISTS,
            message: 'Ce numéro de pilote est déjà utilisé dans votre écurie',
          });
        }
      }

      const pilote = await this.prisma.pilote.update({
        where: {
          id: data.id,
        },
        data: {
          ...(data.name && { name: data.name }),
          ...(data.age && { age: data.age }),
          ...(data.gender && { gender: data.gender }),
          ...(data.best_chrono_time && {
            best_chrono_time: data.best_chrono_time,
          }),
          ...(data.pilote_number && { pilote_number: data.pilote_number }),
          ...(data.points !== undefined && { points: data.points }),
        },
      });

      return {
        pilote: {
          ...pilote,
          stable_id: pilote.stableId,
        },
        message: 'Pilote mis à jour avec succès',
      };
    } catch (error) {
      if (error instanceof RpcException) {
        throw error;
      }
      throw new RpcException({
        code: status.INTERNAL,
        message: 'Erreur lors de la mise à jour du pilote',
      });
    }
  }

  async deletePilote(id: string, stableId: string) {
    try {
      // Vérifier que le pilote appartient à l'écurie
      const existingPilote = await this.prisma.pilote.findFirst({
        where: {
          id,
          stableId,
        },
      });

      if (!existingPilote) {
        throw new RpcException({
          code: status.NOT_FOUND,
          message:
            "Pilote non trouvé ou vous n'avez pas l'autorisation de le supprimer",
        });
      }

      await this.prisma.pilote.delete({
        where: {
          id,
        },
      });

      return {
        success: true,
        message: 'Pilote supprimé avec succès',
      };
    } catch (error) {
      if (error instanceof RpcException) {
        throw error;
      }
      throw new RpcException({
        code: status.INTERNAL,
        message: 'Erreur lors de la suppression du pilote',
      });
    }
  }

  async getPilotesByStable(data: {
    stable_id: string;
    limit?: number;
    offset?: number;
  }) {
    try {
      const pilotes = await this.prisma.pilote.findMany({
        where: {
          stableId: data.stable_id,
        },
        take: data.limit || 10,
        skip: data.offset || 0,
        orderBy: {
          pilote_number: 'asc',
        },
      });

      const total = await this.prisma.pilote.count({
        where: {
          stableId: data.stable_id,
        },
      });

      return {
        pilotes: pilotes.map((pilote) => ({
          ...pilote,
          stable_id: pilote.stableId,
        })),
        total,
      };
    } catch (error) {
      throw new RpcException({
        code: status.INTERNAL,
        message: "Erreur lors de la récupération des pilotes de l'écurie",
      });
    }
  }

  // === MÉTHODES D'INSCRIPTION AUX COURSES ===

  async inscribePiloteToCourse(
    data: {
      pilote_id: string;
      course_id: string;
    },
    stableId: string,
  ) {
    try {
      // 1. Vérifier que le pilote appartient à l'écurie connectée
      const pilote = await this.prisma.pilote.findFirst({
        where: {
          id: data.pilote_id,
          stableId,
        },
      });

      if (!pilote) {
        throw new RpcException({
          code: status.NOT_FOUND,
          message:
            "Pilote non trouvé ou vous n'avez pas l'autorisation de l'inscrire",
        });
      }

      // 2. Vérifier que la course existe
      const course = await this.prisma.course.findUnique({
        where: {
          id: data.course_id,
        },
      });

      if (!course) {
        throw new RpcException({
          code: status.NOT_FOUND,
          message: 'Course non trouvée',
        });
      }

      // 3. Vérifier que le pilote n'est pas déjà inscrit à cette course
      const existingParticipation = await this.prisma.participation.findFirst({
        where: {
          piloteId: data.pilote_id,
          courseId: data.course_id,
        },
      });

      if (existingParticipation) {
        throw new RpcException({
          code: status.ALREADY_EXISTS,
          message: 'Ce pilote est déjà inscrit à cette course',
        });
      }

      // 4. Créer l'inscription (participation)
      const participation = await this.prisma.participation.create({
        data: {
          piloteId: data.pilote_id,
          courseId: data.course_id,
          points: 0, // Points par défaut
        },
        include: {
          pilote: {
            select: {
              id: true,
              name: true,
              pilote_number: true,
            },
          },
          course: {
            select: {
              id: true,
              name: true,
              date: true,
            },
          },
        },
      });

      return {
        participation: {
          ...participation,
          pilote: participation.pilote,
          course: participation.course,
        },
        message: `Pilote ${pilote.name} inscrit avec succès à la course ${course.name}`,
      };
    } catch (error) {
      if (error instanceof RpcException) {
        throw error;
      }
      throw new RpcException({
        code: status.INTERNAL,
        message: "Erreur lors de l'inscription du pilote à la course",
      });
    }
  }

  async getPiloteInscriptions(
    data: {
      pilote_id: string;
      limit?: number;
      offset?: number;
    },
    stableId: string,
  ) {
    try {
      // Vérifier que le pilote appartient à l'écurie connectée
      const pilote = await this.prisma.pilote.findFirst({
        where: {
          id: data.pilote_id,
          stableId,
        },
      });

      if (!pilote) {
        throw new RpcException({
          code: status.NOT_FOUND,
          message:
            "Pilote non trouvé ou vous n'avez pas l'autorisation de voir ses inscriptions",
        });
      }

      const participations = await this.prisma.participation.findMany({
        where: {
          piloteId: data.pilote_id,
        },
        include: {
          course: {
            select: {
              id: true,
              name: true,
              date: true,
              image: true,
            },
          },
        },
        take: data.limit || 10,
        skip: data.offset || 0,
        orderBy: {
          course: {
            date: 'desc',
          },
        },
      });

      const total = await this.prisma.participation.count({
        where: {
          piloteId: data.pilote_id,
        },
      });

      return {
        inscriptions: participations.map((p) => ({
          ...p,
          course: p.course,
        })),
        total,
        pilote: {
          id: pilote.id,
          name: pilote.name,
          pilote_number: pilote.pilote_number,
        },
      };
    } catch (error) {
      if (error instanceof RpcException) {
        throw error;
      }
      throw new RpcException({
        code: status.INTERNAL,
        message: 'Erreur lors de la récupération des inscriptions du pilote',
      });
    }
  }

  async getCourseParticipants(data: {
    course_id: string;
    limit?: number;
    offset?: number;
  }) {
    try {
      // Vérifier que la course existe
      const course = await this.prisma.course.findUnique({
        where: {
          id: data.course_id,
        },
      });

      if (!course) {
        throw new RpcException({
          code: status.NOT_FOUND,
          message: 'Course non trouvée',
        });
      }

      const participations = await this.prisma.participation.findMany({
        where: {
          courseId: data.course_id,
        },
        include: {
          pilote: {
            select: {
              id: true,
              name: true,
              pilote_number: true,
              stableId: true,
            },
          },
        },
        take: data.limit || 20,
        skip: data.offset || 0,
        orderBy: [
          {
            position: 'asc',
          },
          {
            pilote: {
              name: 'asc',
            },
          },
        ],
      });

      const total = await this.prisma.participation.count({
        where: {
          courseId: data.course_id,
        },
      });

      return {
        participants: participations.map((p) => ({
          ...p,
          pilote: p.pilote,
        })),
        total,
        course: {
          id: course.id,
          name: course.name,
          date: course.date,
          nb_tours: course.nb_tours,
        },
      };
    } catch (error) {
      if (error instanceof RpcException) {
        throw error;
      }
      throw new RpcException({
        code: status.INTERNAL,
        message: 'Erreur lors de la récupération des participants de la course',
      });
    }
  }

  async desinscribePiloteFromCourse(
    data: {
      pilote_id: string;
      course_id: string;
    },
    stableId: string,
  ) {
    try {
      // Vérifier que le pilote appartient à l'écurie connectée
      const pilote = await this.prisma.pilote.findFirst({
        where: {
          id: data.pilote_id,
          stableId,
        },
      });

      if (!pilote) {
        throw new RpcException({
          code: status.NOT_FOUND,
          message:
            "Pilote non trouvé ou vous n'avez pas l'autorisation de le désinscrire",
        });
      }

      // Vérifier que l'inscription existe
      const participation = await this.prisma.participation.findFirst({
        where: {
          piloteId: data.pilote_id,
          courseId: data.course_id,
        },
        include: {
          course: {
            select: {
              name: true,
            },
          },
        },
      });

      if (!participation) {
        throw new RpcException({
          code: status.NOT_FOUND,
          message: "Ce pilote n'est pas inscrit à cette course",
        });
      }

      // Supprimer l'inscription
      await this.prisma.participation.delete({
        where: {
          id: participation.id,
        },
      });

      return {
        success: true,
        message: `Pilote ${pilote.name} désinscrit avec succès de la course ${participation.course.name}`,
      };
    } catch (error) {
      if (error instanceof RpcException) {
        throw error;
      }
      throw new RpcException({
        code: status.INTERNAL,
        message: 'Erreur lors de la désinscription du pilote de la course',
      });
    }
  }

  async getMyPilotesInscriptions(
    data: {
      limit?: number;
      offset?: number;
    },
    stableId: string,
  ) {
    try {
      // Récupérer toutes les inscriptions des pilotes de l'écurie
      const participations = await this.prisma.participation.findMany({
        where: {
          pilote: {
            stableId,
          },
        },
        include: {
          pilote: {
            select: {
              id: true,
              name: true,
              pilote_number: true,
            },
          },
          course: {
            select: {
              id: true,
              name: true,
              date: true,
              image: true,
            },
          },
        },
        take: data.limit || 20,
        skip: data.offset || 0,
        orderBy: {
          course: {
            date: 'desc',
          },
        },
      });

      const total = await this.prisma.participation.count({
        where: {
          pilote: {
            stableId,
          },
        },
      });

      return {
        inscriptions: participations.map((p) => ({
          ...p,
          pilote: p.pilote,
          course: p.course,
        })),
        total,
      };
    } catch (error) {
      throw new RpcException({
        code: status.INTERNAL,
        message:
          'Erreur lors de la récupération des inscriptions de vos pilotes',
      });
    }
  }
}
