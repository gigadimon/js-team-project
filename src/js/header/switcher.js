const refs = {
  homeContainer: document.querySelector('.home-container'),
  myLibraryContainer: document.querySelector('.my-library-container'),
  watched: document.querySelector('.watched'),
  queue: document.querySelector('.queue'),
  libraryBtn: document.querySelector('.library'),
  homeBtn: document.querySelector('.home'),
};

const {
  homeContainer,
  myLibraryContainer,
  homeBtn,
  libraryBtn,
  watched,
  queue,
} = refs;

libraryBtn.addEventListener('click', () => {
  homeContainer.classList.add('visually-hidden');
});
homeBtn.addEventListener('click', () => {
  homeContainer.classList.remove('visually-hidden');
});
