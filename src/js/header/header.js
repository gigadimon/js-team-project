import { watchedBtnCB, queueBtnCB } from '../my-library/callbacksForMyLibrery';
import currentSession from '../current-session/currentSession';
import currentLibrary from '../current-session/currentLibrary';

import { openAuthModal } from '../auth/authModal';
import renderMyLibrary from '../my-library/renderMyLibrary';

const headerBoxRef = document.querySelector('.header__box');
const homeBtnRef = document.querySelector('.home');
const libBtnRef = document.querySelector('.library');
const headerRef = document.querySelector('.header');
const headerButtons = document.querySelector('.header__buttons');
const watchedBtn = document.querySelector('.watchedBtn');
const queueBtn = document.querySelector('.queueBtn');
const logo = document.querySelector('.header__logo');
const filter = document.querySelector('.filter_conteiner');
// homeBtnRef.addEventListener('click', switchToHome);
libBtnRef.addEventListener('click', switchToLibrary);

function switchHeaderBgImage() {
  headerRef.classList.add('header__library');
  if(headerRef.classList.contains('header__library')){
    filter.classList.add('is-hidden')
  }
}

function offClassHeaderLibrary(){
  headerRef.classList.remove('header__library');
  if(!headerRef.classList.contains('header__library')){
    filter.classList.remove('is-hidden')
  }
}

export default function switchToLibrary() {
  if (!localStorage.getItem('userEmail')) {
    openAuthModal();
    return;
  }

  renderMyLibrary();
  homeBtnRef.addEventListener('click', switchToHome);
  homeBtnRef.classList.remove('current');
  libBtnRef.classList.add('current');
  libBtnRef.removeEventListener('click', switchToLibrary);
  switchHeaderBgImage();

  headerButtons.classList.remove('visually-hidden');
  headerBoxRef.classList.add('visually-hidden');

  currentLibrary();

  watchedBtn.addEventListener('click', watchedBtnCB);
  queueBtn.addEventListener('click', queueBtnCB);

  sessionStorage.setItem('my-lib', 'true');
}
export function switchToHome() {
  libBtnRef.addEventListener('click', switchToLibrary);
  homeBtnRef.classList.add('current');
  libBtnRef.classList.remove('current');
  homeBtnRef.removeEventListener('click', switchToHome);
  offClassHeaderLibrary();

  headerButtons.classList.add('visually-hidden');
  headerBoxRef.classList.remove('visually-hidden');

  currentSession();

  watchedBtn.removeEventListener('click', watchedBtnCB);
  queueBtn.removeEventListener('click', queueBtnCB);

  sessionStorage.removeItem('my-lib');
}

logo.addEventListener('click', () => {
    if (localStorage.getItem('last-search')) {
    localStorage.removeItem('last-search');
  } else if (localStorage.getItem('last-filter')) {
    localStorage.removeItem('last-filter');
  }
  switchToHome();
});
