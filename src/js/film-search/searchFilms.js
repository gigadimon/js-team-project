import axios from 'axios';
import renderMovieCards from '../handlers/renderMovieCards';
import fetchGenresList from '../queries/fetchGenresList';
import Notiflix from 'notiflix';
import Pagination from '../pagination/Pagination';
import { loaderOn } from '../loader/loader';

const API_KEY = 'ffda232ba1095b2db867c38e7745d8d7';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const cardSection = document.querySelector('.body-container');
const searchSubmit = document.querySelector('.header__form');

async function fetchGetFilmName(name, pageValue) {
  loaderOn();
  const lang = localStorage.getItem('lang');
  let langURL;
  lang === 'ua' ? (langURL = `uk-UA`) : (langURL = `en-US`);
  let response;
  if (langURL) {
    response = await axios.get(
      `/search/movie?api_key=${API_KEY}&language=${langURL}&query=${name}&include_adult=false&page=${pageValue}`
    );
  } else {
    response = await axios.get(
      `/search/movie?api_key=${API_KEY}&language=en-US&query=${name}&include_adult=false&page=${pageValue}`
    );
  }
  // console.log(data)
  const dataGenres = await fetchGenresList();
  const { results, total_pages, page, total_results } = response.data;
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
  const {
    results,
    total_pages: totalPages,
    page,
    dataGenres,
    total_results,
  } = await fetchGetFilmName(name, p);
  totalResultsFilms(total_results);
  renderMovieCards({ results, dataGenres });

  document.querySelector('.pagination').innerHTML = '<ul></ul>';
  if (totalPages === 1 || !totalPages) {
    return;
  }
  const paginationSearch = new Pagination({
    el: document.querySelector('.pagination ul'),
    totalPages: totalPages > 500 ? 500 : totalPages,
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
