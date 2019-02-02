export interface Iconfig {
  images: {
    backdrop_sizes: {
      0: string;
      1: string;
      2: string;
      3: string;
    };
    secure_base_url: string;
  };
}

export interface Imovie {
  backdrop_path: string;
  genre_ids: Igenre[];
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
