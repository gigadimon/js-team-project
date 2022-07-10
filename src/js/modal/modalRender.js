import { backdrop, closeModal } from './modal-close';
import { Notify } from 'notiflix';
import { load, save, remove } from '../current-session/localStorageService';
import { loaderOn, loaderOff } from '../loader/loader';
import treiler from './treiler';

import axios from 'axios';

const API_KEY = 'ffda232ba1095b2db867c38e7745d8d7';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const refs = {
  loader: document.querySelector('.lader_backdrop'),
  poster: document.querySelector('.modal__card-poster'),
  title: document.querySelector('.modal__card-title'),
  vote: document.querySelector('.modal__card-vote'),
  votes: document.querySelector('.modal__card-votes'),
  popularity: document.querySelector('.modal__card-popularity'),
  original: document.querySelector('.modal__card-original-title'),
  genre: document.querySelector('.modal__card-genre'),
  discription: document.querySelector('.modal__card-discription'),
  backdrop: document.querySelector('.backdrop')
};
const scrollBtn = document.querySelector('.back-to-top');

function setDataCard({
  title,
  vote_average,
  vote_count,
  original_title,
  popularity,
  overview,
  poster_path,
  genres,
}) {
  refs.poster.setAttribute(
    'src',
    `${
      poster_path
        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
        : 'https://st.depositphotos.com/1653909/4590/i/600/depositphotos_45905265-stock-photo-movie-clapper.jpg'
    }`
  ),
    (refs.title.textContent = title),
    (refs.vote.textContent = vote_average),
    (refs.votes.textContent = vote_count);
  refs.original.textContent = original_title;
  refs.popularity.textContent = popularity;
  refs.discription.textContent = overview;

  if (genres.length > 0) {
    let genreFilm = [];
    let i = 0;
    for (let i = 0; i < genres.length; i += 1) {
      genreFilm.push(genres[i].name);
    }

    refs.genre.textContent = `${genreFilm.join(' ')}`;
  }

  refs.backdrop.style.background = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
    url(${
      poster_path
        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
        : ''
    })`
}

let containerCardFilm = document.querySelector('.body-container');
containerCardFilm.addEventListener('click', onClickImg);

async function onClickImg(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  scrollBtn.classList.remove('show');
  document.addEventListener('keydown', closeModal);
  let movieId = e.target.getAttribute('data-id');
  await renderModalCard(movieId);
  setTimeout(() => {
    if (refs.loader.classList.contains('is-hidden')) {
      document.body.style.overflow = 'hidden';
      backdrop.classList.remove('is-hidden');
      backdrop.classList.add('is-hidden-off');
    }
  }, 250);
}

async function fetchGetMovieId(MOVIE_ID) {
  loaderOn();
  const { data } = await axios.get(`/movie/${MOVIE_ID}?api_key=${API_KEY}`);
  save('openFilm', data);
  return data;
}

function renderModalCard(ID) {
  let watchedList = load('watchedList');
  let queueList = load('queueList');
  let num = Number(ID);

  if (watchedList) {
    if (watchedList.some(item => item.id === num)) {
      addToWatchedBtn.disabled = true;
      addToWatchedBtn.textContent = 'Added';
    }
  }

  if (queueList) {
    if (queueList.some(item => item.id === num)) {
      addToQueueBtn.disabled = true;
      addToQueueBtn.textContent = 'Added';
    }
  }
  return fetchGetMovieId(ID)
    .then(data => setDataCard(data))
    .finally(() => loaderOff());
}

// saving movies to local storage
const addToWatchedBtn = document.querySelector('.btn__modal-watched');
const addToQueueBtn = document.querySelector('.btn__modal-queue');

addToWatchedBtn.addEventListener('click', addToWatched);
function addToWatched() {
  let watchedList = JSON.parse(localStorage.getItem('watchedList'));
  let openFilm = load('openFilm');

  if (!watchedList) {
    watchedList = [];
  }
  watchedList.push(openFilm);
  localStorage.setItem('watchedList', JSON.stringify(watchedList));
  Notify.info('Movie added to Watched');
  addToWatchedBtn.disabled = true;
  addToWatchedBtn.textContent = 'Added';
}

addToQueueBtn.addEventListener('click', addToQueue);
function addToQueue() {
  let openFilm = load('openFilm');
  let queueList = JSON.parse(localStorage.getItem('queueList'));
  if (!queueList) {
    queueList = [];
  }
  queueList.push(openFilm);
  localStorage.setItem('queueList', JSON.stringify(queueList));
  Notify.info('Movie added to Queue');
  addToQueueBtn.disabled = true;
  addToQueueBtn.textContent = 'Added';
}
