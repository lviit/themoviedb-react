export function config(state = [], action) {
  switch (action.type) {
    case "GET_CONFIG":
      return {
        ...state,
        images: action.config.images
      };
    default:
      return state;
  }
}

export function movies(state = [], action) {
  switch (action.type) {
    case "GET_LATEST_MOVIES":
      return {
        ...state,
        latest: action.movies
      };
    default:
      return state;
  }
}

export function movieFullView(state = [], action) {
  switch (action.type) {
    case "GET_MOVIE_DETAILS":
      return {
        ...state,
        details: action.details
      };
    case "GET_MOVIE_CREDITS":
      return {
        ...state,
        credits: action.credits
      };
    case "GET_MOVIE_REVIEWS":
      return {
        ...state,
        reviews: action.reviews
      };
    case "GET_MOVIE_SIMILAR":
      return {
        ...state,
        similarMovies: action.similarMovies
      };
    default:
      return state;
  }
}
