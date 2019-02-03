import DefaultState, { ImovieFullViewDefaultState } from "./DefaultState";

export function config(state = DefaultState.config, action) {
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
export function movies(state = DefaultState.movies, action) {
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
export function genres(state = DefaultState.genres, action) {
  switch (action.type) {
    case "GET_GENRES":
      return [...action.genres];
    default:
      return state;
  }
}
export function movieFullView(
  state: ImovieFullViewDefaultState = DefaultState.movieFullView,
  action
) {
  switch (action.type) {
    case "GET_MOVIE_DETAILS_LOADING":
      return {
        ...state,
        details: {
          ...state.details,
          isLoading: true
        }
      };
    case "GET_MOVIE_DETAILS_DONE":
      return {
        ...state,
        details: {
          data: action.details,
          isLoading: false
        }
      };
    case "GET_MOVIE_CREDITS_LOADING":
      return {
        ...state,
        credits: {
          ...state.credits,
          isLoading: true
        }
      };
    case "GET_MOVIE_CREDITS_DONE":
      return {
        ...state,
        credits: {
          data: action.credits,
          isLoading: false
        }
      };
    case "GET_MOVIE_REVIEWS_LOADING":
      return {
        ...state,
        reviews: {
          ...state.reviews,
          isLoading: true
        }
      };
    case "GET_MOVIE_REVIEWS_DONE":
      return {
        ...state,
        reviews: {
          data: action.reviews,
          isLoading: false
        }
      };
    case "GET_MOVIE_SIMILAR_LOADING":
      return {
        ...state,
        similarMovies: {
          ...state.similarMovies,
          isLoading: false
        }
      };
    case "GET_MOVIE_SIMILAR_DONE":
      return {
        ...state,
        similarMovies: {
          data: action.similarMovies,
          isLoading: false
        }
      };
    default:
      return state;
  }
}
