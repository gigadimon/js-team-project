const toggleSwitchLang = document.querySelector(
  '.lang__switch input[id="lang-checkbox"]'
);
const currentLang = localStorage.getItem('lang');
/*header*/
const btnHome = document.querySelector('#lang__home');
const btnLibrary = document.querySelector('#lang__library');
const headerInput = document.querySelectorAll('.header__input');
const watchedBtn = document.querySelector('#lang__watched');
const queueBtn = document.querySelector('#lang__queue');
const clearBtn = document.querySelector('#lang__clear');
/*footer*/
const rights = document.querySelector('.lang__rights');
const developed = document.querySelector('#lang__developed');
const by = document.querySelector('#lang__by');
const students = document.querySelectorAll('#lang__students');
const team = document.querySelector('#lang__team');
const nameDmytro = document.querySelector('#name__dmytro');
const teamDmytro = document.querySelector('#team__dmytro');
const nameYulia = document.querySelector('#name__yulia');
const teamYulia = document.querySelector('#team__yulia');
const nameVladyslav = document.querySelector('#name__vladyslav');
const teamVladyslav = document.querySelector('#team__vladyslav');
const nameVolodymyr = document.querySelector('#name__volodymyr');
const teamVolodymyr = document.querySelector('#team__volodymyr');
const nameAnton = document.querySelector('#name__anton');
const teamAnton = document.querySelector('#team__anton');
const nameVitaliy = document.querySelector('#name__vitaliy');
const teamVitaliy = document.querySelector('#team__vitaliy');
const nameYuriy = document.querySelector('#name__yuriy');
const teamYuriy = document.querySelector('#team__yuriy');

const LANG = {
  EN: 'en',
  UA: 'ua',
}; // переводы в других языках можно добавить в массив и проверять на них при клике

if (currentLang) {
  document.documentElement.setAttribute('lang', currentLang);
  toggleSwitchLang.checked = currentLang === LANG.UA;
} // проверяем наличие в localStorage значения и если есть, то присваиваем его атрибуту lang документа

function switchLang(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('lang', LANG.UA);
    localStorage.setItem('lang', LANG.UA);
    toggleSwitchLang.checked = true;
    ua();
    window.location.reload();
  } else {
    document.documentElement.setAttribute('lang', LANG.EN);
    localStorage.setItem('lang', LANG.EN);
    toggleSwitchLang.checked = false;
    en();
    window.location.reload();
  }
}

toggleSwitchLang.addEventListener('change', switchLang);

function ua() {
  btnHome.textContent = 'ГОЛОВНА';
  btnLibrary.textContent = 'БІБЛІОТЕКА';
  headerInput.innerHTML = `<input
            class="header__input"
            type="text"
            placeholder="Пошук"
            name="searchQuery"
            autocomplete="off"
          />`;
  watchedBtn.textContent = 'ПЕРЕГЛЯНУТІ';
  queueBtn.textContent = 'В ЧЕРЗІ';
  clearBtn.textContent = 'ОЧИСТИТИ';

  rights.textContent = '2022 | Всі права захищені | ';
  developed.textContent = ' Розроблено з';
  by.textContent = ' ';
  students.textContent = 'Студентами GoIT';
  team.textContent = 'Команда студентів GoIT';

  nameDmytro.textContent = 'Дмитро';
  teamDmytro.textContent = 'Тімлід';
  nameYulia.textContent = 'Юлія';
  teamYulia.textContent = 'Скрам';
  nameVladyslav.textContent = 'Владислав';
  teamVladyslav.textContent = 'Розробник';
  nameVolodymyr.textContent = 'Володимир';
  teamVolodymyr.textContent = 'Розробник';
  nameAnton.textContent = 'Антон';
  teamAnton.textContent = 'Розробник';
  nameVitaliy.textContent = 'Віталій';
  teamVitaliy.textContent = 'Розробник';
  nameYuriy.textContent = 'Юрій';
  teamYuriy.textContent = 'Розробник';
}

function en() {
  btnHome.textContent = 'HOME';
  btnLibrary.textContent = 'LIBRARY';
  headerInput.innerHTML = `<input
            class="header__input"
            type="text"
            placeholder="Movie search"
            name="searchQuery"
            autocomplete="off"
          />`;
  watchedBtn.textContent = 'WATCHED';
  queueBtn.textContent = 'QUEUE';
  clearBtn.textContent = 'CLEAR';

  rights.textContent = '2020 | All rights reserved | ';
  developed.textContent = ' Developed with';
  by.textContent = ' by';
  students.textContent = ' Students of GoIT';
  team.textContent = 'Team GoIT Students';

  nameDmytro.textContent = 'Dmytro';
  teamDmytro.textContent = 'Tim Lead';
  nameYulia.textContent = 'Yulia';
  teamYulia.textContent = 'Skram';
  nameVladyslav.textContent = 'Vladyslav';
  teamVladyslav.textContent = 'Developer';
  nameVolodymyr.textContent = 'Volodymyr';
  teamVolodymyr.textContent = 'Developer';
  nameAnton.textContent = 'Anton';
  nameAnton.textContent = 'Developer';
  nameVitaliy.textContent = 'Vitaliy';
  teamVitaliy.textContent = 'Developer';
  nameYuriy.textContent = 'Yuriy';
  teamYuriy.textContent = 'Developer';
}

toggleSwitchLang.addEventListener('change', switchLang);
