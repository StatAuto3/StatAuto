import { Injectable } from '@nestjs/common';

@Injectable()
export class StablesService {
  async getStableDetails(stableId: string): Promise<any> {
    // Logique pour récupérer les détails d'une écurie
    return { id: stableId, name: 'Écurie 1' };
  }
}