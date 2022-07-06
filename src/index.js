import renderModal from './js/modal/modalRender';
import currentSession from './js/current-session/currentSession';

currentSession();

const headerBoxRef = document.querySelector('.header__box');
const homeBtnRef = document.querySelector('.home');
const libBtnRef = document.querySelector('.library');
const headerRef = document.querySelector('.header');

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
  return (headerBoxRef.innerHTML = renderLibraryBtns());
}
function switchToHome() {
  libBtnRef.addEventListener('click', switchToLibrary);
  homeBtnRef.classList.add('current');
  libBtnRef.classList.remove('current');
  homeBtnRef.removeEventListener('click', switchToHome);
  switchHeaderBgImage();
  window.location.reload();
  return (headerBoxRef.innerHTML = renderLibraryForm());
}

function renderLibraryBtns() {
  return `<button class="lib__btn watchedBtn current__libBtn">watched</button>
  <button class="lib__btn queueBtn ">queue</button>
`;
}
function renderLibraryForm() {
  return `<form class="header__form" action="#">
  <input
    class="header__input"
    type="text"
    placeholder="Movie search"
    name="searchQuery"
    autocomplete="off"
  />
  <button class="form__btn" type="submit">
    <svg class="form__icon" width="12" height="12">
      <use href="./images/svg/header-icon.svg#icon-search"></use>
    </svg>
  </button>
</form>
`;
}
