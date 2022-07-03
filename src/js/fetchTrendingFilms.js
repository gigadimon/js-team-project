import axios from 'axios';
import getFilmGenresNameArray from './getFilmGenresNameArray';
import makeMovieTrandingCards from './makeMovieTrandingCards';

const API_KEY = 'ffda232ba1095b2db867c38e7745d8d7';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export default async function fetchGetTrending(pageValue) {
  const { data } = await axios.get(
    `/trending/all/day?api_key=${API_KEY}&page=${pageValue}`
  );
  const dataGenres = await getGenresList();
  const { results, total_pages, page, total_results } = data;
  return { results, total_pages, page, total_results, dataGenres };
}

const cardSection = document.querySelector('.body-container');

fetchGetTrending(1).then(({ results, dataGenres }) =>
  results.map(movie => {
    const filmGenres = getFilmGenresNameArray(movie, dataGenres);
    cardSection.insertAdjacentHTML(
      'afterbegin',
      makeMovieTrandingCards(movie, filmGenres)
    );
  })
);

export default async function getGenresList() {
  const response = await axios.get(`/genre/movie/list?api_key=${API_KEY}`);
  return response.data.genres;
}
