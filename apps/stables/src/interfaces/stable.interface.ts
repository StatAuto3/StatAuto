// Interfaces correspondant aux types proto

export interface Pilote {
  id: string;
  name: string;
  stable_id: string;
  age: number;
  gender: string;
  best_chrono_time: number;
  pilote_number: number;
  points: number;
}

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
  created_at: string;
  updated_at: string;
}

export interface GetStablesRequest {
  query: string;
}

export interface GetStableByIdRequest {
  id: string;
}

export interface GetStablesResponse {
  stables: Stable[];
}

export interface GetStableByIdResponse {
  stable: Stable;
}
