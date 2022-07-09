import './authentication';
import './registration';
import switchToLibrary, { switchToHome } from './header/header';

const overlay = document.querySelector('.auth-overlay');
const authBtn = document.querySelector('.auth-btn__enter');
const closeBtn = document.querySelector('.auth-modal__btn-close');

authBtn.addEventListener('click', openAuthModal);
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', event => {
  if (event.target !== overlay) {
    return;
  }
  closeModal();
});

export function closeModal() {
  overlay.classList.add('visually-hidden');

  document.removeEventListener('keydown', handleKeyListener);
}

export function openAuthModal() {
  overlay.classList.remove('visually-hidden');

  document.addEventListener('keydown', handleKeyListener);
}

function handleKeyListener(event) {
  event.code === 'Escape' && closeModal();
}
