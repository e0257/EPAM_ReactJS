export interface MovieRequestParams {
  sortBy: string;
  sortOrder: 'asc' | 'desc';
  filter: string[];
  search: string;
  offset: string;
  limit: string;
}

export interface MovieDTO {
  id: number;
  title: string;
  tagLine: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  runtime: number;
  genres: string[];
}

export interface Movie {
  id: number;
  imageUrl: string;
  movieName: string;
  releaseDate: string;
  releaseYear: number;
  rating: string;
  duration: string;
  genres: string[];
  description: string;
}
