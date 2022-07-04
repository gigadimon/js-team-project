import axios from 'axios';
import getFilmGenresNameArray from './getFilmGenresNameArray';
import makeMovieTrandingCards from './makeMovieTrandingCards';
import Pagination from './paganathion';

const API_KEY = 'ffda232ba1095b2db867c38e7745d8d7';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export default async function fetchGetTrending(pageValue) {
  const { data } = await axios.get(
    `/trending/all/day?api_key=${API_KEY}&page=${pageValue}`
  );
  const dataGenres = await getGenresList();
  const { results, total_pages, page, total_results } = data;
  return { results, totalPages: total_pages, page, totalResults: total_results, dataGenres };
}

const cardSection = document.querySelector('.body-container');

function renderMovieCards({ results, dataGenres }) {
  results.map(movie => {
    const filmGenres = getFilmGenresNameArray(movie, dataGenres);
    cardSection.insertAdjacentHTML(
      'afterbegin',
      makeMovieTrandingCards(movie, filmGenres)
    );
  });
}

export default async function getGenresList() {
  const response = await axios.get(`/genre/movie/list?api_key=${API_KEY}`);
  return response.data.genres;
}


async function createFilmList() {
  const { results, totalPages, page, dataGenres } = await fetchGetTrending(1);
  renderMovieCards({results, dataGenres});
  const pagination = new Pagination({
    el: document.querySelector(".pagination ul"),
    totalPages,
    page,
  });

  pagination.onChange(async (pageNumber) => {
    cardSection.innerHTML = '';
    const data = await fetchGetTrending(pageNumber);
    renderMovieCards({ results: data.results, dataGenres: data.dataGenres });
  });
}

createFilmList();
