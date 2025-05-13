import { Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import { Observable } from 'rxjs';

export interface Stable {
  id: string;
  name: string;
  location: string;
  image: string;
  image_cover: string;
  pilotes: number;
  pilote: Pilote[];
  how_many_tournaments: number;
  how_many_wins: number;
  how_many_losses: number;
  total_points: number;
}

export interface Pilote {
  id: string;
  name: string;
  age: number;
  gender: string;
  best_chrono_time: number;
}

export interface GetStablesResponse {
  stables: Stable[];
}

export interface GetStableByIdResponse {
  stable: Stable;
}

interface StablesService {
  GetStables(data: { query: string }): Observable<GetStablesResponse>;
  GetStableById(data: { id: string }): Observable<GetStableByIdResponse>;
}

@Injectable()
export class AppService {
  private stablesService: StablesService;

  constructor(@Inject('STABLES_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.stablesService =
      this.client.getService<StablesService>('StablesService');
  }

  getStables(query: string): Observable<GetStablesResponse> {
    return this.stablesService.GetStables({ query });
  }

  getStableById(id: string): Observable<GetStableByIdResponse> {
    return this.stablesService.GetStableById({ id });
  }
}
