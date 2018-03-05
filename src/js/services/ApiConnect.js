/* eslint no-console: 0 */

import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3/";
const configUrl = `${baseUrl}configuration?api_key=${process.env.API_KEY}`;
const moviesUrl = `${baseUrl}discover/movie?primary_release_year=2017&sort_by=popularity.desc&api_key=${process.env.API_KEY}`;

export default {
  getConfig: () =>
    axios
      .get(configUrl)
      .then(res => res.data)
      .catch(error => console.log(error)),

  getLatestMovies: () =>
    axios
      .get(moviesUrl)
      .then(res => res.data)
      .catch(error => console.log(error)),

  getGenres: () =>
    axios
      .get(`${baseUrl}genre/movie/list?api_key=${process.env.API_KEY}`)
      .then(res => res.data.genres)
      .catch(error => console.log(error)),

  getMovieDetails: id =>
    axios
      .get(`${baseUrl}movie/${id}?api_key=${process.env.API_KEY}`)
      .then(res => res.data)
      .catch(error => console.log(error)),

  getReviews: id =>
    axios
      .get(`${baseUrl}movie/${id}/reviews?api_key=${process.env.API_KEY}`)
      .then(res => res.data)
      .catch(error => console.log(error)),

  getCredits: id =>
    axios
      .get(`${baseUrl}movie/${id}/credits?api_key=${process.env.API_KEY}`)
      .then(res => res.data)
      .catch(error => console.log(error)),

  getSimilar: id =>
    axios
      .get(`${baseUrl}movie/${id}/similar?api_key=${process.env.API_KEY}`)
      .then(res => res.data)
      .catch(error => console.log(error)),

  Search: query =>
    axios
      .get(`${baseUrl}search/movie?api_key=${process.env.API_KEY}&query=${query}`)
      .then(res => res.data)
      .catch(error => console.log(error)),

  SearchByGenre: genre =>
    axios
      .get(`${baseUrl}discover/movie?api_key=${process.env.API_KEY}&with_genres=${genre}`)
      .then(res => res.data)
      .catch(error => console.log(error))
};
