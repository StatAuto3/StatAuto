import { Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import { Observable } from 'rxjs';

export interface Stable {
  id: string;
  name: string;
  location: string;
}

export interface GetStablesResponse {
  stables: Stable[];
}

interface StablesService {
  GetStables(data: { query: string }): Observable<GetStablesResponse>;
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
}
