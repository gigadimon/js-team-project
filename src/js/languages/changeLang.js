import { langMainArr } from './langData';

const langSwitcher = document.getElementById('lang-checkbox');

window.addEventListener('load', onWindowLoad);
langSwitcher.addEventListener('click', switchLanguage);

function switchLanguage(event) {
  event.target.checked
    ? localStorage.setItem('lang', 'ua')
    : localStorage.setItem('lang', 'en');
  const lang = localStorage.getItem('lang');
  setContentLang(langMainArr, lang);
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
