import Fetch from './fetch';
import { enterToAccount } from './loginMechanics';

const form = document.getElementById('reg-form');
const loginInput = document.querySelector('#login');
const passwordInput = document.querySelector('#password');

const formRegContainer = document.querySelector('.reg-form');
const formAuthContainer = document.querySelector('.auth-form');
const alreadyRegBtn = document.querySelector('.already-reg');

alreadyRegBtn.addEventListener('click', () => {
  formAuthContainer.classList.remove('visually-hidden');
  formRegContainer.classList.add('visually-hidden');
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const email = loginInput.value;
  const password = passwordInput.value;
  if (email && password) {
    Fetch.regWithEmailAndPass(email, password).then(userData => {
      if (!userData.error) {
        enterToAccount(userData);
      }
    });
  }

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
});
