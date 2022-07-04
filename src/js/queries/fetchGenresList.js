import axios from 'axios';

const API_KEY = 'ffda232ba1095b2db867c38e7745d8d7';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export default async function fetchGenresList() {
  const response = await axios.get(`/genre/movie/list?api_key=${API_KEY}`);
  return response.data.genres;
}
