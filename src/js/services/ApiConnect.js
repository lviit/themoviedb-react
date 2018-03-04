/* eslint no-console: 0 */

import axios from 'axios';
import settings from './Settings';

export default {
  getConfig: () => axios
    .get(settings.configUrl)
    .then(res => res.data)
    .catch(error => console.log(error)),

  getLatestMovies: () => axios
    .get(settings.moviesUrl)
    .then(res => res.data)
    .catch(error => console.log(error)),

  getGenres: () => axios
    .get(`${settings.baseUrl}genre/movie/list?api_key=${settings.apiKey}`)
    .then(res => res.data.genres)
    .catch(error => console.log(error)),

  getMovieDetails: id => axios
    .get(`${settings.baseUrl}movie/${id}?api_key=${settings.apiKey}`)
    .then(res => res.data)
    .catch(error => console.log(error)),

  getReviews: id => axios
    .get(`${settings.baseUrl}movie/${id}/reviews?api_key=${settings.apiKey}`)
    .then(res => res.data)
    .catch(error => console.log(error)),

  getCredits: id => axios
    .get(`${settings.baseUrl}movie/${id}/credits?api_key=${settings.apiKey}`)
    .then(res => res.data)
    .catch(error => console.log(error)),

  getSimilar: id => axios
    .get(`${settings.baseUrl}movie/${id}/similar?api_key=${settings.apiKey}`)
    .then(res => res.data)
    .catch(error => console.log(error)),

  Search: query => axios
    .get(`${settings.baseUrl}search/movie?api_key=${settings.apiKey}&query=${query}`)
    .then(res => res.data)
    .catch(error => console.log(error)),

  SearchByGenre: genre => axios
    .get(`${settings.baseUrl}discover/movie?api_key=${settings.apiKey}&with_genres=${genre}`)
    .then(res => res.data)
    .catch(error => console.log(error)),
};
