const headerBoxRef = document.querySelector('.header__box');
const homeBtnRef = document.querySelector('.home');
const libBtnRef = document.querySelector('.library');
const headerRef = document.querySelector('.header');
const headerButtons = document.querySelector('.header__buttons');

homeBtnRef.addEventListener('click', switchToHome);
libBtnRef.addEventListener('click', switchToLibrary);

function switchHeaderBgImage() {
  headerRef.classList.toggle('header__library');
}

function switchToLibrary() {
  homeBtnRef.addEventListener('click', switchToHome);
  homeBtnRef.classList.remove('current');
  libBtnRef.classList.add('current');
  libBtnRef.removeEventListener('click', switchToLibrary);
  switchHeaderBgImage();

  headerButtons.classList.remove('visually-hidden');
  headerBoxRef.classList.add('visually-hidden');
}
function switchToHome() {
  libBtnRef.addEventListener('click', switchToLibrary);
  homeBtnRef.classList.add('current');
  libBtnRef.classList.remove('current');
  homeBtnRef.removeEventListener('click', switchToHome);
  switchHeaderBgImage();

  headerButtons.classList.add('visually-hidden');
  headerBoxRef.classList.remove('visually-hidden');
}
