import axios from 'axios';
import fetchGenresList from './fetchGenresList';
import { loaderOn } from '../loader/loader';

const API_KEY = 'ffda232ba1095b2db867c38e7745d8d7';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export default async function fetchGetTrending(pageValue) {
  loaderOn();
  const { data } = await axios.get(
    `/movie/popular?api_key=${API_KEY}&page=${pageValue}`
  );
  const dataGenres = await fetchGenresList();
  const { results, total_pages, page, total_results } = data;
  console.log(data);
  return {
    results,
    totalPages: total_pages,
    page,
    totalResults: total_results,
    dataGenres,
  };
}
