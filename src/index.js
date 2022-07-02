import axios from 'axios';
/* testing code */

const API_KEY = 'ffda232ba1095b2db867c38e7745d8d7';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

async function fetchGetTrending(pageValue) {
  const { data } = await axios.get(
    `/trending/all/day?api_key=${API_KEY}&page=${pageValue}`
  );
  const { results, total_pages, page, total_results } = data;
  return { results, total_pages, page, total_results };
}

const cardRef = document.querySelector('.movieCard');
const cardSection = document.querySelector('.body-container');

fetchGetTrending(1).then(({ results }) =>
  results.map(movie =>
    cardSection.insertAdjacentHTML('afterbegin', makeMovieTrandingCards(movie))
  )
);

async function getGenresList() {
  const response = await axios.get(`/genre/movie/list?api_key=${API_KEY}`);
  return response.data.genres;
}

function makeMovieTrandingCards({
  id,
  name,
  title,
  genre_ids,
  media_type,
  original_name,
  original_title,
  popularity,
  release_date,
  poster_path,
  first_air_date,
  overview,
  vote_average,
  vote_count,
}) {
  console.log(release_date || first_air_date);

  // let date = first_air_date.slice(0, 4);
  // return `
  //   <div class="movieCard">
  //     <div class="movieCard__poster">
  //       <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${name}">
  //     </div>
  //     <div class="movieCard__info">
  //       <h2 class="movieCard__title">${title || name}</h2>
  //       <!-- <p class="movieCard__overview">${overview}</p> -->
  //       <p class="movieCard__releaseDate">${release_date || first_air_date}</p>
  //       <p class="movieCard__popularity">${popularity}</p>
  //       <p class="movieCard__voteAverage">${vote_average}</p>
  //       <p class="movieCard__voteCount">${vote_count}</p>
  //     </div>
  //   </div>
  // `;
  return `
    <div class="body-container container">
  <div class="film__wrap">
    <img class="film__img" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${name}" />
    <h2 class="film__text film__name">${title || name}</h2>
    <p class="film__text film__description">Genre,genre | ${
      release_date || first_air_date
    }</p>
  </div>
</div>
  `;
}

// const allGenres = [
//   { id: 28, name: 'Action' },
//   { id: 12, name: 'Adventure' },
//   { id: 16, name: 'Animation' },
//   { id: 35, name: 'Comedy' },
//   { id: 80, name: 'Crime' },
//   { id: 99, name: 'Document,ary' },
//   { id: 18, name: 'Drama' },
//   { id: 10751, name: 'Famil,y' },
//   { id: 14, name: 'Fantasy' },
//   { id: 36, name: 'History' },
//   { id: 27, name: 'Horror' },
//   { id: 10402, name: 'Music' },
//   { id: 9648, name: 'Mystery' },
//   { id: 10749, name: 'Romance' },
//   { id: 878, name: 'Science Fict,ion' },
//   { id: 10770, name: 'TV Movie' },
//   { id: 53, name: 'Thriller' },
//   { id: 10752, name: 'War' },
//   { id: 37, name: 'Western' },
// ];
