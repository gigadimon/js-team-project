import { remove } from '../current-session/localStorageService';
import { load, save, remove } from '../current-session/localStorageService';
export { backdrop, closeModal };
let backdrop = document.querySelector('.backdrop');
let modalIconClose = document.querySelector('.modal__btn-close');
const addToWatchedBtn = document.querySelector('.btn__modal-watched');
const addToQueueBtn = document.querySelector('.btn__modal-queue');
const poster = document.querySelector('.modal__card-poster');

backdrop.addEventListener('click', closeModal);
modalIconClose.addEventListener('click', closeModal);
let openFilm = load('openFilm');
let watchedList = load('watchedList');
let queueList = load('queueList');

function closeModal(e) {
  e.preventDefault();

  if (
    e.target === backdrop ||
    e.currentTarget === modalIconClose ||
    e.code === 'Escape'
  ) {
    poster.src = 'https://viyar.ua/store/Items/photos/ph67137.jpg';
    backdrop.classList.add('is-hidden');
    document.removeEventListener('keydown', closeModal);
    remove('openFilm');
    addToWatchedBtn.disabled = false;
    addToWatchedBtn.textContent = 'Add to watched';
    addToQueueBtn.disabled = false;
    addToQueueBtn.textContent = 'Add to queue';
  }
}
