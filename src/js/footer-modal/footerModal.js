const btnLink = document.querySelector('.footer__modal-btn');
const btnHeart = document.querySelector('.footer__modal-btn--heart');
const modalClouseBtn = document.querySelector('.footer__close-btn');
const footerBackdrop = document.querySelector('.footer__backdrop');
const footerModal = document.querySelector('.footer__modal');
const scrollOnModal = document.querySelector('body');

btnLink.addEventListener('click', onOpenFooterModal);
btnHeart.addEventListener('click', onOpenFooterModal);
modalClouseBtn.addEventListener('click', onCloseFooterModal);

function onOpenFooterModal(event) {
  event.preventDefault();
  scrollOnModal.classList.add('scroll-hidden');
  footerBackdrop.classList.remove('is-hidden');
  window.addEventListener('keydown', onEscPress);
}

function onCloseFooterModal(event) {
  footerBackdrop.classList.add('is-hidden');
  window.removeEventListener('keydown', onEscPress);
  scrollOnModal.classList.remove('scroll-hidden');
}

function onClickFooterBackdrop(event) {
  if (event.target === event.currentTarget) {
    onCloseFooterModal();
  }
}

function onEscPress(event) {
  if (event.code === 'Escape') {
    onCloseFooterModal();
  }
}
