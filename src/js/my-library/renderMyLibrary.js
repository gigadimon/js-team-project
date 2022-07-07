import makeMyLibraryCards from "./makeMyLibraryCards";

const cardSection = document.querySelector('.body-container');
const watchedBtn = document.querySelector(".watchedBtn")




export default function renderMyLibrary(results) {
    results.map(movie => {
    cardSection.insertAdjacentHTML(
      'beforeend',
      makeMyLibraryCards(movie)
    );
  });
}


