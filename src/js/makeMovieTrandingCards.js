import * as basicLightbox from 'basiclightbox';

const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`);

instance.show();

export default function makeMovieTrandingCards(
  {
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
  } = movie,
  filmGenres
) {
  console.log(vote_average);
  return `
  <li class="film__wrap">
  <img class="film__img" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${name}" />
  <h2 class="film__text film__name">${title || name} | ${
    first_air_date ? first_air_date.slice(0, 4) : release_date.slice(0, 4)
  }</h2>
  <p class="film__text film__description">${
    filmGenres.length ? filmGenres : 'Other'
  }</p>
  </li>
  `;
  // return `
  // <li class="film__wrap">
  // <img class="film__img" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${name}" />
  // <h2 class="film__text film__name">${title || name}</h2>
  // <p class="film__text film__description">${
  //   filmGenres.length ? filmGenres : 'Other'
  // } | ${
  //   first_air_date ? first_air_date.slice(0, 4) : release_date.slice(0, 4)
  // }</p>
  // </li>
  // `;
}
