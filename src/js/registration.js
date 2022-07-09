import { Notify } from 'notiflix';
import Fetch from './fetch';
import { closeModal } from './authModal';

const form = document.getElementById('reg-form');
const formRegContainer = document.querySelector('.reg-form');
const formAuthContainer = document.querySelector('.auth-form');
const login = document.querySelector('#login');
const loginName = document.querySelector('.login');
const authBtn = document.querySelector('.auth-btn__enter');
const leaveBtn = document.querySelector('.auth-btn__leave');
const password = document.querySelector('#password');
const alreadyRegBtn = document.querySelector('.already-reg');

alreadyRegBtn.addEventListener('click', () => {
  formAuthContainer.classList.remove('visually-hidden');
  formRegContainer.classList.add('visually-hidden');
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (login.value && password.value) {
    const data = {
      email: login.value,
      password: password.value,
    };

    Fetch.regWithEmailAndPass(data.email, data.password)
      .then(userData => {
        console.log(userData);
        if (userData.error) {
          const failure = [...userData.error.message.split('_').join(' ')]
            .map((el, i) => (i === 0 ? el : el.toLowerCase()))
            .join('');

          if (userData.error.message === 'EMAIL_EXISTS') {
            Notify.failure(
              `Email is exists. Please login to your account or register a new one`
            );
          }

          if (userData.error.message === 'INVALID_EMAIL') {
            Notify.failure(
              `Email is invalid. Please enter a valid email address`
            );
          }
        } else {
          Notify.success('Вы успешно зарегистрировались');
        }

        login.value = '';
        password.value = '';
        return userData;
      })
      .then(userData => {
        if (userData.email) {
          loginName.innerHTML = userData.email;
          leaveBtn.classList.remove('visually-hidden');
          authBtn.classList.add('visually-hidden');
          closeModal();
        }
      });

    /* записи о пользователях в базе данных по запросу Fetch.create*/
    // fetch('https://team-js-project-default-rtdb.firebaseio.com/users.json', {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then(res => res.json())
    //   .then(data => console.log(Object.values(data)));

    // Fetch.create(data).then(() => {
    //   login.value = '';
    //   password.value = '';
    // });
  }
});
