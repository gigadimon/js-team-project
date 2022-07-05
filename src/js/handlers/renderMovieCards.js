import getFilmGenresNameArray from './getFilmGenresNameArray';
import makeMovieTrandingCards from './makeMovieTrandingCards';

const cardSection = document.querySelector('.body-container');

export default function renderMovieCards({ results, dataGenres }) {
  results.map(movie => {
    const filmGenres = getFilmGenresNameArray(movie, dataGenres);
    cardSection.insertAdjacentHTML(
      'beforeend',
      makeMovieTrandingCards(movie, filmGenres)
    );
  });
}
