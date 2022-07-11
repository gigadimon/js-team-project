import makeMyLibraryCards from './makeMyLibraryCards';
import { load, save, remove } from '../current-session/localStorageService';
const cardSection = document.querySelector('.body-container');

function noContentMessage() {
  return (cardSection.innerHTML = `<p class="empty__container">...there is nothing here yet &#129335;</p>`);
}

export default function renderMyLibrary(results) {
  if (results === null) {
    return noContentMessage();
  }
  if (!results) {
    cardSection.innerHTML = '';
    return;
  } else {
    if (results.length === 0) {
      return noContentMessage();
    }
    results.map(movie => {
      cardSection.insertAdjacentHTML('afterbegin', makeMyLibraryCards(movie));
    });
  }
}

let myLibraryBtn = document.querySelector('.library');
let watchedBtn = document.querySelector('.watchedBtn');
let queueBtn = document.querySelector('.queueBtn');
let containerCardFilm = document.querySelector('.body-container');
containerCardFilm.addEventListener('click', deleteFilm);
const clearBtn = document.querySelector('.clearBtn');
clearBtn.addEventListener('click', clearMyLibrary);

function clearMyLibrary() {
  if (watchedBtn.classList.contains('currentMyLib')) {
    localStorage.removeItem('watchedList');
    renderMyLibrary(load('watchedList'));
  }
  if (queueBtn.classList.contains('currentMyLib')) {
    localStorage.removeItem('queueList');
    renderMyLibrary(load('queueList'));
  }
  noContentMessage();
}

function deleteFilm(e) {
  e.preventDefault();

  if (e.target.classList.contains('film__btn--delete')) {
    if (watchedBtn.classList.contains('currentMyLib')) {
      let watchedList = load('watchedList');
      let num = Number(e.target.getAttribute('data-id'));
      let index = watchedList.findIndex(item => item.id === num);
      watchedList.splice(index, 1);
      save('watchedList', watchedList);
      window.location.reload();
    }

    if (queueBtn.classList.contains('currentMyLib')) {
      let queueList = load('queueList');
      let num = Number(e.target.getAttribute('data-id'));
      let index = queueList.findIndex(item => item.id === num);
      queueList.splice(index, 1);
      save('queueList', queueList);
      window.location.reload();
    }
  }
}
