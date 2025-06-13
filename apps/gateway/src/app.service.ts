import { Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import { Observable } from 'rxjs';
import { LoginRequest, RegisterRequest } from './types/auth.types';

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
  pilote_number: number;
  points: number;
  stable_id: string;
  participations: Participation[];
}

export interface Participation {
  id: string;
  piloteId: string;
  courseId: string;
  chrono: number;
  position: number;
  points: number;
  createdAt: Date;
  updatedAt: Date;
  pilote?: {
    id: string;
    name: string;
    pilote_number: number;
  };
  course?: {
    id: string;
    name: string;
    date: Date;
    image?: string;
  };
}

export interface Course {
  id: string;
  name: string;
  image: string;
  date: Date;
  nb_tours: number;
  participants: Participation[];
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

export interface GetCoursesResponse {
  courses: Course[];
}

export interface GetCourseByIdResponse {
  course: Course;
}

// Interfaces pour les pilotes
export interface GetPilotesResponse {
  pilotes: Pilote[];
  total: number;
}

export interface GetPiloteByIdResponse {
  pilote: Pilote;
}

export interface CreatePiloteResponse {
  pilote: Pilote;
  message: string;
}

export interface UpdatePiloteResponse {
  pilote: Pilote;
  message: string;
}

export interface DeletePiloteResponse {
  success: boolean;
  message: string;
}

export interface GetPilotesByStableResponse {
  pilotes: Pilote[];
  total: number;
}

// Interfaces pour les inscriptions
export interface InscribePiloteToCourseResponse {
  participation: Participation;
  message: string;
}

export interface GetPiloteInscriptionsResponse {
  inscriptions: Participation[];
  total: number;
  pilote: {
    id: string;
    name: string;
    pilote_number: number;
  };
}

export interface GetCourseParticipantsResponse {
  participants: Participation[];
  total: number;
  course: {
    id: string;
    name: string;
    date: Date;
    nb_tours: number;
  };
}

export interface DesinscribePiloteFromCourseResponse {
  success: boolean;
  message: string;
}

export interface GetMyPilotesInscriptionsResponse {
  inscriptions: Participation[];
  total: number;
}

interface StablesService {
  GetStables(data: { query: string }): Observable<GetStablesResponse>;
  GetStableById(data: { id: string }): Observable<GetStableByIdResponse>;
}

interface AuthenticationService {
  Register(request: RegisterRequest): Observable<RegisterResponse>;
  Login(request: LoginRequest): Observable<LoginResponse>;
}

interface CoursesService {
  GetCourses(): Observable<GetCoursesResponse>;
  GetCourseById(data: { id: string }): Observable<GetCourseByIdResponse>;
}

interface PilotesService {
  GetPilotes(
    data: { query?: string; limit?: number; offset?: number },
    metadata?: any,
  ): Observable<GetPilotesResponse>;
  GetPiloteById(
    data: { id: string },
    metadata?: any,
  ): Observable<GetPiloteByIdResponse>;
  CreatePilote(
    data: {
      name: string;
      age: number;
      gender: string;
      best_chrono_time: number;
      pilote_number: number;
    },
    metadata?: any,
  ): Observable<CreatePiloteResponse>;
  UpdatePilote(
    data: {
      id: string;
      name?: string;
      age?: number;
      gender?: string;
      best_chrono_time?: number;
      pilote_number?: number;
      points?: number;
    },
    metadata?: any,
  ): Observable<UpdatePiloteResponse>;
  DeletePilote(
    data: { id: string },
    metadata?: any,
  ): Observable<DeletePiloteResponse>;
  GetPilotesByStable(
    data: { limit?: number; offset?: number },
    metadata?: any,
  ): Observable<GetPilotesByStableResponse>;

  // Méthodes d'inscription
  InscribePiloteToCourse(
    data: { pilote_id: string; course_id: string },
    metadata?: any,
  ): Observable<InscribePiloteToCourseResponse>;
  GetPiloteInscriptions(
    data: { pilote_id: string; limit?: number; offset?: number },
    metadata?: any,
  ): Observable<GetPiloteInscriptionsResponse>;
  GetCourseParticipants(
    data: { course_id: string; limit?: number; offset?: number },
    metadata?: any,
  ): Observable<GetCourseParticipantsResponse>;
  DesinscribePiloteFromCourse(
    data: { pilote_id: string; course_id: string },
    metadata?: any,
  ): Observable<DesinscribePiloteFromCourseResponse>;
  GetMyPilotesInscriptions(
    data: { limit?: number; offset?: number },
    metadata?: any,
  ): Observable<GetMyPilotesInscriptionsResponse>;
}

@Injectable()
export class AppService {
  private stablesService: StablesService;
  private authenticationService: AuthenticationService;
  private coursesService: CoursesService;
  private pilotesService: PilotesService;

  constructor(
    @Inject('STABLES_PACKAGE') private stablesClient: ClientGrpc,
    @Inject('AUTHENTICATION_PACKAGE') private authClient: ClientGrpc,
    @Inject('COURSES_PACKAGE') private coursesClient: ClientGrpc,
    @Inject('PILOTES_PACKAGE') private pilotesClient: ClientGrpc,
    @Inject('TOURNAMENTS_PACKAGE') private tournamentsClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.stablesService =
      this.stablesClient.getService<StablesService>('StablesService');
    this.authenticationService =
      this.authClient.getService<AuthenticationService>(
        'AuthenticationService',
      );
    this.coursesService =
      this.coursesClient.getService<CoursesService>('CoursesService');
    this.pilotesService =
      this.pilotesClient.getService<PilotesService>('PilotesService');
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

  getCourses(): Observable<GetCoursesResponse> {
    return this.coursesService.GetCourses();
  }

  getCourseById(id: string): Observable<GetCourseByIdResponse> {
    return this.coursesService.GetCourseById({ id });
  }

  // === MÉTHODES PILOTES SÉCURISÉES ===

  getPilotes(
    data: { query?: string; limit?: number; offset?: number },
    authorization: string,
  ): Observable<GetPilotesResponse> {
    const metadata = { authorization };
    return this.pilotesService.GetPilotes(data, metadata);
  }

  getPiloteById(
    id: string,
    authorization: string,
  ): Observable<GetPiloteByIdResponse> {
    const metadata = { authorization };
    return this.pilotesService.GetPiloteById({ id }, metadata);
  }

  createPilote(
    data: {
      name: string;
      age: number;
      gender: string;
      best_chrono_time: number;
      pilote_number: number;
    },
    authorization: string,
  ): Observable<CreatePiloteResponse> {
    const metadata = { authorization };
    return this.pilotesService.CreatePilote(data, metadata);
  }

  updatePilote(
    data: {
      id: string;
      name?: string;
      age?: number;
      gender?: string;
      best_chrono_time?: number;
      pilote_number?: number;
      points?: number;
    },
    authorization: string,
  ): Observable<UpdatePiloteResponse> {
    const metadata = { authorization };
    return this.pilotesService.UpdatePilote(data, metadata);
  }

  deletePilote(
    id: string,
    authorization: string,
  ): Observable<DeletePiloteResponse> {
    const metadata = { authorization };
    return this.pilotesService.DeletePilote({ id }, metadata);
  }

  getPilotesByStable(
    data: { limit?: number; offset?: number },
    authorization: string,
  ): Observable<GetPilotesByStableResponse> {
    const metadata = { authorization };
    return this.pilotesService.GetPilotesByStable(data, metadata);
  }

  // === MÉTHODES D'INSCRIPTION AUX COURSES SÉCURISÉES ===

  inscribePiloteToCourse(
    data: { pilote_id: string; course_id: string },
    authorization: string,
  ): Observable<InscribePiloteToCourseResponse> {
    const metadata = { authorization };
    return this.pilotesService.InscribePiloteToCourse(data, metadata);
  }

  getPiloteInscriptions(
    data: { pilote_id: string; limit?: number; offset?: number },
    authorization: string,
  ): Observable<GetPiloteInscriptionsResponse> {
    const metadata = { authorization };
    return this.pilotesService.GetPiloteInscriptions(data, metadata);
  }

  getCourseParticipants(
    data: { course_id: string; limit?: number; offset?: number },
    authorization: string,
  ): Observable<GetCourseParticipantsResponse> {
    const metadata = { authorization };
    return this.pilotesService.GetCourseParticipants(data, metadata);
  }

  desinscribePiloteFromCourse(
    data: { pilote_id: string; course_id: string },
    authorization: string,
  ): Observable<DesinscribePiloteFromCourseResponse> {
    const metadata = { authorization };
    return this.pilotesService.DesinscribePiloteFromCourse(data, metadata);
  }

  getMyPilotesInscriptions(
    data: { limit?: number; offset?: number },
    authorization: string,
  ): Observable<GetMyPilotesInscriptionsResponse> {
    const metadata = { authorization };
    return this.pilotesService.GetMyPilotesInscriptions(data, metadata);
  }
}
