import apiConnect from "../services/ApiConnect";

export function getConfig() {
  return async (dispatch, getState) =>  {
    const response = await apiConnect.getConfig();
    dispatch({
      type: 'GET_CONFIG',
      config: response,
    });
  }
}

export function getLatestMovies() {
  return async (dispatch, getState) =>  {
    const response = await apiConnect.getLatestMovies();
    dispatch({
      type: 'GET_LATEST_MOVIES',
      movies: response.results,
    });
  }
}

export function getMovieDetails(id) {
  return async (dispatch, getState) =>  {
    const response = await apiConnect.getMovieDetails(id);
    dispatch({
      type: 'GET_MOVIE_DETAILS',
      details: response,
    });
  }
}

export function getReviews(id) {
  return async (dispatch, getState) =>  {
    const response = await apiConnect.getReviews(id);
    dispatch({
      type: 'GET_MOVIE_REVIEWS',
      reviews: response.results,
    });
  }
}

export function getCredits(id) {
  return async (dispatch, getState) =>  {
    const response = await apiConnect.getCredits(id);
    dispatch({
      type: 'GET_MOVIE_CREDITS',
      credits: response,
    });
  }
}

export function getSimilar(id) {
  return async (dispatch, getState) =>  {
    const response = await apiConnect.getSimilar(id);
    dispatch({
      type: 'GET_MOVIE_SIMILAR',
      similarMovies: response.results,
    });
  }
}

export function getGenres() {
  return async (dispatch, getState) =>  {
    const response = await apiConnect.getGenres();
    dispatch({
      type: 'GET_GENRES',
      genres: response,
    });
  }
}

export function SearchByGenre() {
  return async (dispatch, getState) =>  {
    const response = await apiConnect.SearchByGenre();
    dispatch({
      type: 'SEARCH_BY_GENRE',
      searchByGenre: response,
    });
  }
}

export function Search() {
  return async (dispatch, getState) =>  {
    const response = await apiConnect.Search();
    dispatch({
      type: 'SEARCH',
      search: response,
    });
  }
}
