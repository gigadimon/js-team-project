import axios from 'axios';

const API_KEY = 'ffda232ba1095b2db867c38e7745d8d7';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const URL_IMG = 'https://image.tmdb.org/t/p/w500';

export default async function fetchGenresList() {
  const response = await axios.get(`/genre/movie/list?api_key=${API_KEY}`);
  return response.data.genres;
}

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  galleryNotEmpty();
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}


export function fetchMovieCreditsById(id) {
  return fetchWithErrorHandling(
    `${axios.defaults.baseURL}/movie/${id}/credits?api_key=${API_KEY}`
  );
}

export function galleryNotEmpty() {
  console.log(true)
}