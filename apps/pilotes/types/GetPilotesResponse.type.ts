import { Pilote } from '../generated/prisma';

export type GetPilotesResponse = {
  pilotes: Pilote[];
};

export type GetPiloteIdResponse = {
  pilote: Pilote;
};
