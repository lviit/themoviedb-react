export interface ImovieFullViewDefaultState {
  details: {
    data: [];
    isLoading: boolean;
  };
  similarMovies: {
    data: [];
    isLoading: boolean;
  };
  reviews: {
    data: [];
    isLoading: boolean;
  };
  credits: {
    data: [];
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
