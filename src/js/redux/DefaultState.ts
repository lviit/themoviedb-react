export interface ImovieFullViewDefaultState {
  details: {
    data: any[];
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
    data: any[];
    isLoading: boolean;
  };
}

export default {
  config: {
    images: {}
  },
  movies: {
    latest: []
  },
  genres: [],
  movieFullView: {
    details: {
      data: [],
      isLoading: false
    },
    similarMovies: {
      data: [],
      isLoading: false
    },
    reviews: {
      data: [],
      isLoading: false
    },
    credits: {
      data: [],
      isLoading: false
    }
  }
};
