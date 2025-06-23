export interface Course {
  id: string;
  name: string;
  image: string;
  date: Date;
  nb_tours: number;
  participants: Participation[];
}

export interface Participation {
  id: string;
  piloteId: string;
  courseId: string;
  chrono: number;
  position: number;
  points: number;
}

export interface GetCoursesRequest {
  query: string;
}

export interface GetCourseByIdRequest {
  id: string;
}

export interface GetCoursesResponse {
  courses: Course[];
}

export interface GetCourseByIdResponse {
  course: Course;
}
