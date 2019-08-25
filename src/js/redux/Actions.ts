import { Dispatch } from "redux";
import ApiConnect from "../services/ApiConnect";

export function getConfig() {
  return async (dispatch: Dispatch<any>): Promise<void> => {
    const response: any = await ApiConnect.getConfig();
    dispatch({
      type: "GET_CONFIG",
      config: response
    });
  };
}

export function getLatestMovies() {
  return async (dispatch: Dispatch<any>): Promise<void> => {
    const response: any = await ApiConnect.getLatestMovies();
    dispatch({
      type: "GET_LATEST_MOVIES",
      movies: response.results
    });
  };
}
export function getMovieDetails(id: string) {
  return async (dispatch: Dispatch<any>): Promise<void> => {
    dispatch({ type: "GET_MOVIE_DETAILS_LOADING" });
    const response: any = await ApiConnect.getMovieDetails(id);
    dispatch({
      type: "GET_MOVIE_DETAILS_DONE",
      details: response
    });
  };
}
export function getReviews(id: string) {
  return async (dispatch: Dispatch<any>): Promise<void> => {
    dispatch({ type: "GET_MOVIE_REVIEWS_LOADING" });
    const response: any = await ApiConnect.getReviews(id);
    dispatch({
      type: "GET_MOVIE_REVIEWS_DONE",
      reviews: response.results
    });
  };
}
export function getCredits(id: string) {
  return async (dispatch: Dispatch<any>): Promise<void> => {
    dispatch({ type: "GET_MOVIE_CREDITS_LOADING" });
    const response: any = await ApiConnect.getCredits(id);
    dispatch({
      type: "GET_MOVIE_CREDITS_DONE",
      credits: response
    });
  };
}
export function getSimilar(id: string) {
  return async (dispatch: Dispatch<any>): Promise<void> => {
    dispatch({ type: "GET_MOVIE_SIMILAR_LOADING" });
    const response: any = await ApiConnect.getSimilar(id);
    dispatch({
      type: "GET_MOVIE_SIMILAR_DONE",
      similarMovies: response.results
    });
  };
}
export function getGenres() {
  return async (dispatch: Dispatch<any>): Promise<void> => {
    const response: any = await ApiConnect.getGenres();
    dispatch({
      type: "GET_GENRES",
      genres: response
    });
  };
}
export function SearchByGenre(genre: string) {
  return async (dispatch: Dispatch<any>): Promise<void> => {
    const response: any = await ApiConnect.SearchByGenre(genre);
    dispatch({
      type: "SEARCH_BY_GENRE",
      searchByGenre: response
    });
  };
}
export function Search(query: string) {
  return async (dispatch: Dispatch<any>): Promise<void> => {
    const response: any = await ApiConnect.Search(query);
    dispatch({
      type: "SEARCH",
      search: response
    });
  };
}
