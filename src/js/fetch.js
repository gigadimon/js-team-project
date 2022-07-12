import Notiflix, { Notify } from 'notiflix';

export default class Fetch {
  static API_KEY = 'AIzaSyBsgyw5msQwc2HX8RiFdzRf-qSWVnfNLJA';
  static create(data) {
    return fetch(
      'https://team-js-project-default-rtdb.firebaseio.com/users.json',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then(response => response.json())
      .then(res => {
        data.id = res.name;
        return data;
      })
      .then(addToLocalStorage);
  }

  static regWithEmailAndPass(email, password) {
    return fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${Fetch.API_KEY}`,
      {
        method: 'POST',
        body: JSON.stringify({ email, password, returnSecureToken: true }),
        headers: { 'Content-Type': 'application/json' },
      }
    )
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          handleError(data);
        }
        return data;
      });
  }

  static authWithEmailAndPass(email, password) {
    return fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${Fetch.API_KEY}`,
      {
        method: 'POST',
        body: JSON.stringify({ email, password, returnSecureToken: true }),
        headers: { 'Content-Type': 'application/json' },
      }
    )
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          handleError(data);
        }
        return data;
      });
  }
}

function addToLocalStorage(data) {
  const users = localStorage.getItem('user');
  users
    ? localStorage.setItem('user', JSON.stringify([...JSON.parse(users), data]))
    : localStorage.setItem('user', JSON.stringify([data]));
}

function handleError(data) {
  const failure = [...data.error.message.split('_').join(' ')]
    .map((el, i) => (i === 0 ? el : el.toLowerCase()))
    .join('');
  Notify.failure(`${failure}. Please enter correct data`);
}
