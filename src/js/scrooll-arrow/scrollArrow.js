const scrollBtn = document.querySelector('.back-to-top');

const btnVisibility = () => {
  if (window.scrollY > 0) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
};

function scrollUp() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

document.addEventListener('scroll', () => {
  btnVisibility();
});
scrollBtn.addEventListener('click', e => {
  e.preventDefault();
  scrollUp();
});
