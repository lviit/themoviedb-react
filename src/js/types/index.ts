export interface Iconfig {
  images: {
    backdrop_sizes: string[];
    logo_sizes: string[];
    secure_base_url: string;
  };
}

export interface Imovie {
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: number;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ImovieDetails {
  releaseDate: string;
  revenue: number;
  budget: number;
  runtime: number;
  title: string;
  tagline: string;
  overview: string;
  backDropPath: string;
  genres: Igenre[];
  voteAverage: number;
}

export interface Igenre {
  id: number;
  name: string;
}

export interface Ireview {
  author: string;
  content: string;
  id: string;
  url: string;
}
