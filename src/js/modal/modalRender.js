import { backdrop, closeModal } from './modal-close';

import axios from 'axios';

const API_KEY = 'ffda232ba1095b2db867c38e7745d8d7';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const refs = {
  poster: document.querySelector('.modal__card-poster'),
  title: document.querySelector('.modal__card-title'),
  vote: document.querySelector('.modal__card-vote'),
  votes: document.querySelector('.modal__card-votes'),
  popularity: document.querySelector('.modal__card-popularity'),
  original: document.querySelector('.modal__card-original-title'),
  genre: document.querySelector('.modal__card-genre'),
  discription: document.querySelector('.modal__card-discription'),
};

function setDataCard(data) {
  refs.poster.setAttribute(
    'src',
    `${
      data.poster_path
        ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
        : 'https://pixabay.com/get/g25c1e797fdbd407eaad39a6e81eeab52bd5393c20eee7b6ca96c90ee34bf0c5afe9249dc64d37d9295f0188ce5b48ade5c2a580852f67af1ceec8032389f9e39_640.jpg'
    }`
  ),
    (refs.title.textContent = `${data.title}`),
    (refs.vote.textContent = `${data.vote_average}`),
    (refs.votes.textContent = `${data.vote_count}`);
  refs.original.textContent = `${data.original_title}`;
  refs.popularity.textContent = `${data.popularity}`;
  refs.discription.textContent = `${data.overview}`;

  if (data.genres.length > 0) {
    let genreFilm = [];

    for (let i = 0; i < data.genres.length; i += 1) {
      genreFilm.push(data.genres[i].name);
    }

    refs.genre.textContent = `${genreFilm.join()}`;
  }
}

let containerCardFilm = document.querySelector('.container');
containerCardFilm.addEventListener('click', onClickImg);

function onClickImg(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  document.addEventListener('keydown', closeModal);
  let movieId = e.target.getAttribute('data-id');
  renderModalCard(movieId);
  backdrop.classList.remove('is-hidden');
}

async function fetchGetMovieId(MOVIE_ID) {
  const { data } = await axios.get(`/movie/${MOVIE_ID}?api_key=${API_KEY}`);
  return data;
}

function renderModalCard(ID) {
  fetchGetMovieId(ID).then(data => setDataCard(data));
}
