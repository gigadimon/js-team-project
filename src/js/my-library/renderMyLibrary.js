import makeMyLibraryCards from './makeMyLibraryCards';

const cardSection = document.querySelector('.body-container');

export default function renderMyLibrary(results) {
  results?.map(movie => {
    cardSection.insertAdjacentHTML('afterbegin', makeMyLibraryCards(movie));
  });
}
