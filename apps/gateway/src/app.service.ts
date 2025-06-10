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
  email: string;
  password: string;
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

export interface RegisterResponse {
  token: string;
}

export interface LoginResponse {
  token: string;
}

export interface GetPilotesResponse {
  pilotes: Pilote[];
}

export interface GetPiloteIdResponse {
  pilote: Pilote;
}

export interface  RegisterRequest {
  name: string;
  email: string;
  password: string;
  location: string;
  image?: string;
  image_cover?: string;
}
export interface LoginRequest {
  email: string;
  password: string;
}

interface StablesService {
  GetStables(data: { query: string }): Observable<GetStablesResponse>;
  GetStableById(data: { id: string }): Observable<GetStableByIdResponse>;
}

interface AuthenticationService {
  Register(request: RegisterRequest): Observable<RegisterResponse>;
  Login(request: LoginRequest): Observable<LoginResponse>;
}

interface PiloteService {
  GetPilotes(data: { query: string }): Observable<GetPilotesResponse>;
  GetPiloteById(data: { id: string }): Observable<GetPiloteIdResponse>;
}

@Injectable()
export class AppService {
  private stablesService: StablesService;
  private authenticationService: AuthenticationService;
  private pilotesService: PiloteService;

  constructor(
    @Inject('STABLES_PACKAGE') private stablesClient: ClientGrpc,
    @Inject('AUTHENTICATION_PACKAGE') private authClient: ClientGrpc,
    @Inject('PILOTES_PACKAGE') private pilotesClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.stablesService =
      this.stablesClient.getService<StablesService>('StablesService');
    this.authenticationService =
      this.authClient.getService<AuthenticationService>(
        'AuthenticationService',
      );
    this.pilotesService =
      this.pilotesClient.getService<PiloteService>('PilotesService');
    this.pilotesService =
      this.pilotesClient.getService<PiloteService>('PilotesService');
  }

  getStables(query: string): Observable<GetStablesResponse> {
    return this.stablesService.GetStables({ query });
  }

  getStableById(id: string): Observable<GetStableByIdResponse> {
    return this.stablesService.GetStableById({ id });
  }

  register(body: any): Observable<RegisterResponse> {
    return this.authenticationService.Register(body);
  }

  login(body: any): Observable<LoginResponse> {
    return this.authenticationService.Login(body);
  }

  getPilotes(body: any): Observable<GetPilotesResponse> {
    return this.pilotesService.GetPilotes(body);
  }

  getPiloteById(id: string): Observable<GetPiloteIdResponse> {
    return this.pilotesService.GetPiloteById({ id });
  }
}
