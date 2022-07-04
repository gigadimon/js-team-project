import axios from 'axios';
import getFilmGenresNameArray from '../handlers/getFilmGenresNameArray';
import makeMovieTrandingCards from '../handlers/makeMovieTrandingCards';
import fetchGenresList from '../queries/fetchGenresList';

const API_KEY = 'ffda232ba1095b2db867c38e7745d8d7';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const cardSection = document.querySelector('.body-container');
const searchSubmit = document.querySelector('.header__form');

async function fetchGetFilmName(name) {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&query=${name}&page=1&include_adult=false`
  );
  const dataGenres = await fetchGenresList();
  const { results, total_pages, page, total_results } = data;
  return { results, total_pages, page, total_results, dataGenres };
}

searchSubmit.addEventListener('submit', e => {
  e.preventDefault();
  const name = e.currentTarget.elements[0].value;
  console.log(typeof name);
  cardSection.innerHTML = '';
  if (name === '') {
    window.location.reload();
  } else {
    fetchGetFilmName(name).then(({ results, dataGenres }) =>
      results.map(movie => {
        const filmGenres = getFilmGenresNameArray(movie, dataGenres);
        cardSection.insertAdjacentHTML(
          'afterbegin',
          makeMovieTrandingCards(movie, filmGenres)
        );
      })
    );
  }
});
