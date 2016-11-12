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
  getMovieFullview: (id) => {
    return axios
      .get(settings.baseUrl + 'movie/' + id + '?api_key='  + settings.apiKey)
      .then(res => res.data)
      .catch(error => console.log(error));
  }
}
