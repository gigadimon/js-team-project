export { backdrop, closeModal };
let backdrop = document.querySelector('.backdrop');
let modalIconClose = document.querySelector('.modal__btn-close');

backdrop.addEventListener('click', closeModal);
modalIconClose.addEventListener('click', closeModal);

function closeModal(e) {
  e.preventDefault();
  if (
    e.target === backdrop ||
    e.currentTarget === modalIconClose ||
    e.code === 'Escape'
  ) {
    backdrop.classList.add('is-hidden');
    document.removeEventListener('keydown', closeModal);
  }
}
