declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.md" {
  const content: any;
  export default content;
}

declare module "enzyme";
declare module "nock";
declare module "react-slick";
declare module "react-onclickoutside";
declare module "throttle-debounce";

interface Istate {
  genres: any[];
  config: any;
  movies: any;
  movieFullView: ImovieFullView;
}

interface ImovieFullView {
  details: {
    data: any;
    isLoading: boolean;
  };
  similarMovies: {
    data: any[];
    isLoading: boolean;
  };
  reviews: {
    data: any[];
    isLoading: boolean;
  };
  credits: {
    data: any;
    isLoading: boolean;
  };
}
