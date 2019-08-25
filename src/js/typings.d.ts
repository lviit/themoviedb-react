declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.md" {
  const content: any;
  export default content;
}

declare module "enzyme";
declare module "enzyme-adapter-react-16";
declare module "nock";
declare module "react-slick";
declare module "react-onclickoutside";
declare module "throttle-debounce";

interface Istate {
  genres: Igenre[];
  config: Iconfig;
  latestMovies: Imovie[];
  movieFullView: ImovieFullView;
}

interface ImovieFullView {
  details: {
    data: any;
    isLoading: boolean;
  };
  similarMovies: {
    data: Imovie[];
    isLoading: boolean;
  };
  reviews: {
    data: Ireview[];
    isLoading: boolean;
  };
  credits: {
    cast: IcastMember[];
    isLoading: boolean;
  };
}

interface Iconfig {
  images: {
    backdrop_sizes: string[];
    logo_sizes: string[];
    secure_base_url: string;
  };
}

interface Imovie {
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

interface ImovieDetails {
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

interface Igenre {
  id: number;
  name: string;
}

interface Ireview {
  author: string;
  content: string;
  id: string;
  url: string;
}

interface IcastMember {
  id: string;
  profile_path: string;
  name: string;
  character: string;
}
