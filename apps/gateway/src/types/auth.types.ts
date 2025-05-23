export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
  location: string;
  image?: string;
  image_cover?: string;
}

export interface LoginResponse {
  token: string;
}

export interface RegisterResponse {
  token: string;
}
