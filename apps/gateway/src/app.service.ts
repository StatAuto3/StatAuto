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

@Injectable()
export class AppService {
  private stablesService: StablesService;
  private authenticationService: AuthenticationService;
  private coursesService: CoursesService;
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
}
