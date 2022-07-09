import Notiflix, { Notify } from 'notiflix';
import Fetch from './fetch';
import { openModal, closeModal } from './authModal';

const form = document.getElementById('auth-form');
const login = form.querySelector('#auth-login');
const password = form.querySelector('#auth-password');
const authBtn = document.querySelector('.auth-btn__enter');
const leaveBtn = document.querySelector('.auth-btn__leave');
const loginName = document.querySelector('.login');
const anywayRegBtn = document.querySelector('.anyway-reg');
const formRegContainer = document.querySelector('.reg-form');
const formAuthContainer = document.querySelector('.auth-form');

anywayRegBtn.addEventListener('click', () => {
  formRegContainer.classList.remove('visually-hidden');
  formAuthContainer.classList.add('visually-hidden');
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (login.value && password.value) {
    const data = {
      email: login.value,
      password: password.value,
    };

    Fetch.authWithEmailAndPass(data.email, data.password).then(data => {
      if (data.error) {
        const failure = [...data.error.message.split('_').join(' ')]
          .map((el, i) => (i === 0 ? el : el.toLowerCase()))
          .join('');
        Notify.failure(`${failure}. Please enter correct data`);
        return;
      }
      if (data.email) {
        Notify.success('Вы успешно вошли в аккаунт');
        loginName.innerHTML = data.email;
        leaveBtn.classList.remove('visually-hidden');
        authBtn.classList.add('visually-hidden');
        closeModal();
      }
      login.value = '';
      password.value = '';
    });
  }
});

leaveBtn.addEventListener('click', () => {
  leaveBtn.classList.add('visually-hidden');
  loginName.innerHTML = '';

  authBtn.classList.remove('visually-hidden');
});
