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
  // console.log(vote_average);
  return `
  <li class="film__wrap">
  <img class="film__img" src="${
    poster_path
      ? `https://image.tmdb.org/t/p/w500${poster_path}`
      : 'https://pixabay.com/get/g25c1e797fdbd407eaad39a6e81eeab52bd5393c20eee7b6ca96c90ee34bf0c5afe9249dc64d37d9295f0188ce5b48ade5c2a580852f67af1ceec8032389f9e39_640.jpg'
  }" alt="${name}" data-id='${id}' />
  <h2 class="film__text film__name">${title || name} | ${
    first_air_date ? first_air_date?.slice(0, 4) : release_date?.slice(0, 4)
  }</h2>
  <p class="film__text film__description">${
    filmGenres?.length ? filmGenres : 'Other'
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
