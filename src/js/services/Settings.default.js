// Add apikey and copy this to Settings.js
const apiKey = '12345678901234567890';
const baseUrl = 'https://api.themoviedb.org/3/';
const configUrl = `${baseUrl}configuration?api_key=${apiKey}`;
const moviesUrl = `${baseUrl}discover/movie?primary_release_year=2016&sort_by=popularity.desc&api_key=${apiKey}`;

export default {
  apiKey,
  baseUrl,
  configUrl,
  moviesUrl,
};
