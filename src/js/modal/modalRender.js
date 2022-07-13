import closeModal, { backdrop } from './modal-close';
import { Notify } from 'notiflix';
import { load, save, remove } from '../current-session/localStorageService';
import { loaderOn, loaderOff } from '../loader/loader';
import { openAuthModal } from '../auth/authModal';
import treiler from './treiler';
import { fetchMovieCreditsById, URL_IMG } from '../queries/fetchGenresList';
import setContentLang from '../languages/changeLang';
import { langFilmModalArr, langAuthorModalArr } from '../languages/langData';
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
  backdrop: document.querySelector('.backdrop'),
  cardMoveAuthors: document.getElementById('cardMoveAuthors'),
  cardMoveDetail: document.querySelector('.modal'),
  showAuthors: document.getElementById('showAuthors'),
};
const scrollBtn = document.querySelector('.back-to-top');

function setDataCard({
  id,
  title,
  vote_average,
  vote_count,
  // original_title,
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
  refs.original.textContent = title;
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
        : 'https://st.depositphotos.com/1653909/4590/i/600/depositphotos_45905265-stock-photo-movie-clapper.jpg'
    })`;
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
  const lang = localStorage.getItem('lang');
  let langURL;
  lang === 'ua' ? (langURL = `uk-UA`) : (langURL = `en-US`);
  let response;
  loaderOn();
  if (langURL) {
    response = await axios.get(
      `/movie/${MOVIE_ID}?api_key=${API_KEY}&language=${langURL}`
    );
  } else {
    response = await axios.get(`/movie/${MOVIE_ID}?api_key=${API_KEY}`);
  }
  save('openFilm', response.data);
  return response.data;
}

function renderModalCard(ID) {
  let watchedList = load('watchedList');
  let queueList = load('queueList');
  let num = Number(ID);
  refs.showAuthors.dataset.id = num;

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

  if (!localStorage.getItem('userEmail')) {
    addToWatchedBtn.textContent = 'Add to Watched';
    addToWatchedBtn.disabled = false;
    addToQueueBtn.textContent = 'Add to Queue';
    addToQueueBtn.disabled = false;
  }

  const lang = localStorage.getItem('lang');
  if (lang) setContentLang(langFilmModalArr, lang);

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
  if (!localStorage.getItem('userEmail')) {
    openAuthModal();
    return;
  }
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
  if (!localStorage.getItem('userEmail')) {
    openAuthModal();
    return;
  }
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

//renderAuthors
refs.cardMoveDetail.addEventListener('click', renderAuthors);
refs.cardMoveAuthors.addEventListener('click', e => {
  if (e.target.id === 'btnGoBack') {
    hideAuthorsModal();
  }
});

async function renderAuthors(e) {
  if (e.target.id === 'showAuthors') {
    const movieId = e.target.dataset.id;
    const { cast } = await fetchMovieCreditsById(movieId);
    showAuthorsModal();
    refs.cardMoveAuthors.innerHTML = renderAuthorsList(cast);
    const lang = localStorage.getItem('lang');
    if (lang) setContentLang(langAuthorModalArr, lang);
  }
  window.addEventListener('keydown', closeModalEscKey);
  refs.backdrop.addEventListener('click', backdropClick);
}

function renderAuthor({ profile_path, name, id }) {
  const imgUrl = profile_path
    ? URL_IMG + profile_path
    : 'https://upload.wikimedia.org/wikipedia/commons/1/1d/No_image.JPG';
  if(profile_path === null) {
    profile_path = 'https://upload.wikimedia.org/wikipedia/commons/1/1d/No_image.JPG';
  }
  console.log(profile_path);
  return `<li class="author__item">
               <img data-personid="${id}" class="author__img" src="${imgUrl}" alt="${name}" width="100" height="100"/>
               <p class="author__title">${name}</p>
            </li>`;
}
function renderAuthorsList(authorsArr) {
  const arrAuthors = authorsArr.map(author => renderAuthor(author)).join('');
  return `<button type="button" class="btn-go-back lng__goBack" id="btnGoBack">
        Back to card
      </button><ul class="author__grid">${arrAuthors}</ul>`;
}

function showAuthorsModal() {
  refs.cardMoveDetail.classList.add('hide-detale');
  refs.cardMoveAuthors.classList.add('show-author');
}
function hideAuthorsModal() {
  refs.cardMoveDetail.classList.remove('hide-detale');
  refs.cardMoveAuthors.classList.remove('show-author');
}

function closeModalEscKey(evt) {
  if (evt.code === 'Escape') {
    hideAuthorsModal();
    window.removeEventListener('keydown', closeModalEscKey);
  }
}

function backdropClick(e) {
  if (e.currentTarget === e.target) {
    hideAuthorsModal();
  }
}
