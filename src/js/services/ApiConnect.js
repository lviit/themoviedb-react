import axios from 'axios';
import settings from './Settings';

export default {
  getConfig: () => {
    return axios
      .get(settings.configUrl)
      .then(res => res.data)
      .catch(error => console.log(error));
  },
  getMovies: () => {
    return axios
      .get(settings.moviesUrl)
      .then(res => res.data)
      .catch(error => console.log(error));
  },
  getGenres: () => {
    return axios
      .get(settings.baseUrl + 'genre/movie/list?api_key=' + settings.apiKey)
      .then(res => res.data.genres)
      .catch(error => console.log(error));
  },
  getMovieFullview: (id) => {
    return axios
      .get(settings.baseUrl + 'movie/' + id + '?api_key='  + settings.apiKey)
      .then(res => res.data)
      .catch(error => console.log(error));
  },
  getReviews: (id) => {
    return axios
      .get(settings.baseUrl + 'movie/' + id + '/reviews?api_key=' + settings.apiKey)
      .then(res => res.data)
      .catch(error => console.log(error));
  },
  getCredits: (id) => {
    return axios
      .get(settings.baseUrl + 'movie/' + id + '/credits?api_key=' + settings.apiKey)
      .then(res => res.data)
      .catch(error => console.log(error));
  },
  getSimilar: (id) => {
    return axios
      .get(settings.baseUrl + 'movie/' + id + '/similar?api_key=' + settings.apiKey)
      .then(res => res.data)
      .catch(error => console.log(error));
  },
  Search: (query) => {
    return axios
      .get(settings.baseUrl + 'search/movie?api_key=' + settings.apiKey + '&query=' + query)
      .then(res => res.data)
      .catch(error => console.log(error));
  }
}
