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
    const response = await apiConnect.getMovies();
    dispatch({
      type: 'GET_LATEST_MOVIES',
      movies: response.results,
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

export function getMovieFullview() {
  return async (dispatch, getState) =>  {
    const response = await apiConnect.getMovieFullview();
    dispatch({
      type: 'GET_MOVIE_FULL_VIEW',
      movieFullView: response,
    });
  }
}

export function getReviews() {
  return async (dispatch, getState) =>  {
    const response = await apiConnect.getReviews();
    dispatch({
      type: 'GET_REVIEWS',
      reviews: response,
    });
  }
}

export function getCredits() {
  return async (dispatch, getState) =>  {
    const response = await apiConnect.getCredits();
    dispatch({
      type: 'GET_CREDITS',
      credits: response,
    });
  }
}

export function getSimilar() {
  return async (dispatch, getState) =>  {
    const response = await apiConnect.getSimilar();
    dispatch({
      type: 'GET_SIMILAR',
      similar: response,
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

export function SearchByGenre() {
  return async (dispatch, getState) =>  {
    const response = await apiConnect.SearchByGenre();
    dispatch({
      type: 'SEARCH_BY_GENRE',
      searchByGenre: response,
    });
  }
}
