import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getStables(query: string) {
    // Simulation de données
    return {
      stables: [
        {
          id: '1',
          name: 'Écurie du Soleil',
          location: 'Paris',
        },
        {
          id: '2',
          name: 'Écurie de la Lune',
          location: 'Lyon',
        },
      ],
    };
  }
}
