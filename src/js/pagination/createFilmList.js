import renderMovieCards from '../handlers/renderMovieCards';
import fetchGetTrending from '../queries/fetchTrendingFilms';
import Pagination from './Pagination';

const cardSection = document.querySelector('.body-container');

export default async function createFilmList() {
  const { results, totalPages, page, dataGenres } = await fetchGetTrending(1);
  renderMovieCards({ results, dataGenres });
  const pagination = new Pagination({
    el: document.querySelector('.pagination ul'),
    totalPages,
    page,
  });

  pagination.onChange(async pageNumber => {
    const data = await fetchGetTrending(pageNumber);
    cardSection.innerHTML = '';
    renderMovieCards(data);
    console.dir(document.documentElement);
  });
}
