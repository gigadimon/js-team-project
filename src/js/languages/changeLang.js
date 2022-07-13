import { langMainArr } from './langData';
import fetchGetTrending from '../queries/fetchTrendingFilms';
import renderMovieCards from '../handlers/renderMovieCards';

const langSwitcher = document.getElementById('lang-checkbox');
const cardSection = document.querySelector('.body-container');

window.addEventListener('load', onWindowLoad);
langSwitcher.addEventListener('click', switchLanguage);

async function switchLanguage(event) {
  event.target.checked
    ? localStorage.setItem('lang', 'ua')
    : localStorage.setItem('lang', 'en');
  const lang = localStorage.getItem('lang');
  setContentLang(langMainArr, lang);
  const { results, dataGenres } = await fetchGetTrending(1);
  cardSection.innerHTML = '';
  renderMovieCards({ results, dataGenres });
}

function onWindowLoad() {
  const lang = localStorage.getItem('lang');
  if (lang) {
    setContentLang(langMainArr, lang);
    lang === 'ua'
      ? (langSwitcher.checked = true)
      : (langSwitcher.checked = false);
  }
}

export default function setContentLang(contentArr, lang) {
  contentArr.forEach(el => {
    el.placeholder
      ? (document.querySelector(`.lng__${el.selector}`).placeholder = el[lang])
      : (document.querySelector(`.lng__${el.selector}`).textContent = el[lang]);
  });
}
