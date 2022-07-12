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
    backdrop_path,
    overview,
    vote_average,
    vote_count,
  } = movie,
  filmGenres
) {
  return `
  <li class="film__wrap">
  <img class="film__img" src="${
    poster_path
      ? `https://image.tmdb.org/t/p/w500${poster_path}`
      : 'https://st.depositphotos.com/1653909/4590/i/600/depositphotos_45905265-stock-photo-movie-clapper.jpg'
  }" alt="${name}" data-id='${id}'/>
  <h2 class="film__text film__name">${title || name} | ${
    first_air_date ? first_air_date?.slice(0, 4) : release_date?.slice(0, 4)
  }<span class="film__rating">${vote_average}</span></h2>
  <p class="film__text film__description">${
    filmGenres?.length ? filmGenres.join(', ') : 'Other'
  }</p>
  </li>
  `;
}
