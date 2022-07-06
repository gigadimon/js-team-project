import renderMovieCards from '../handlers/renderMovieCards';
import fetchGetTrending from '../queries/fetchTrendingFilms';
import Pagination from './Pagination';

const cardSection = document.querySelector('.body-container');
const logo = document.querySelector(".header__logo")
const INITIAL_PAGE_NUMBER = 1;

export default async function createFilmListTrending() {
  if (localStorage.getItem("last-search")) {
    localStorage.removeItem("last-search")
  }
  const { results, totalPages, page, dataGenres } = await fetchGetTrending(1);
  renderMovieCards({ results, dataGenres });

  document.querySelector('.pagination').innerHTML = "<ul></ul>"

  const paginationTrend = new Pagination({
    el: document.querySelector('.pagination ul'),
    totalPages,
    page,
  });

  paginationTrend.onChange(async pageNumber => {
    const data = await fetchGetTrending(pageNumber);
    cardSection.innerHTML = '';
    renderMovieCards(data);
  });
}

logo.addEventListener("click", createFilmListTrending)