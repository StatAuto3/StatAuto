import { Injectable } from '@nestjs/common';

@Injectable()
export class PilotesService {
  async getPilotesByStable(stableId: string): Promise<any[]> {
    // Logique pour récupérer les pilotes d'une écurie
    return [
      { id: '1', name: 'Pilote 1', stableId },
      { id: '2', name: 'Pilote 2', stableId },
    ];
  }

  async getPiloteDetails(piloteId: string): Promise<any> {
    // Logique pour récupérer les détails d'un pilote
    return { id: piloteId, name: 'Pilote 1', stableId: 'stable1' };
  }
}