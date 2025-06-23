type LoginRequest = {
  email: string;
  password: string;
};

type RegisterRequest = {
  email: string;
  password: string;
  name: string;
  location: string;
  image?: string;
  image_cover?: string;
};

export type { LoginRequest, RegisterRequest };
