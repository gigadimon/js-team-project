import axios from 'axios';
import getFilmGenresNameArray from '../handlers/getFilmGenresNameArray';
import makeMovieTrandingCards from '../handlers/makeMovieTrandingCards';
import renderMovieCards from '../handlers/renderMovieCards';
import fetchGenresList from '../queries/fetchGenresList';
import Notiflix from 'notiflix';
import Pagination from '../pagination/Pagination';

const API_KEY = 'ffda232ba1095b2db867c38e7745d8d7';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const cardSection = document.querySelector('.body-container');
const searchSubmit = document.querySelector('.header__form');

async function fetchGetFilmName(name, pageValue) {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&query=${name}&page=1&include_adult=false&page=${pageValue}`
  );
  const dataGenres = await fetchGenresList();
  const { results, total_pages, page, total_results } = data;
  saveSearch(name, page);
  return { results, total_pages, page, total_results, dataGenres };
}

function totalResultsFilms(results) {
  if (results === 0) {
    Notiflix.Notify.failure('No movie found, change request');
  } else if (results > 100) {
    Notiflix.Notify.info(
      `${results} movies found, make a more precise request`
    );
  } else {
    Notiflix.Notify.success(`found ${results} movies`);
  }
}

export default async function createFilmListSearch(name, p) {
  const { results, totalPages, page, dataGenres, total_results } =
    await fetchGetFilmName(name, p);
  totalResultsFilms(total_results);
  renderMovieCards({ results, dataGenres });

  document.querySelector('.pagination').innerHTML = '<ul></ul>';

  const paginationSearch = new Pagination({
    el: document.querySelector('.pagination ul'),
    totalPages,
    page,
  });

  paginationSearch.onChange(async pageNumber => {
    const data = await fetchGetFilmName(name, pageNumber);
    cardSection.innerHTML = '';
    renderMovieCards(data);
  });
}

function saveSearch(input, page) {
  const search = JSON.stringify({ input, page });
  localStorage.setItem('last-search', search);
}

searchSubmit.addEventListener('submit', e => {
  e.preventDefault();
  const name = e.currentTarget.elements[0].value.trim();
  if (name === '') {
    Notiflix.Notify.warning('An empty string cannot be a query');
  } else {
    cardSection.innerHTML = '';
    createFilmListSearch(name, 1);
  }
});
