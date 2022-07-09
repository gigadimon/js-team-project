const scrollBtn = document.querySelector(".back-to-top");

  const btnVisibility = () => {
  if (window.scrollY > 50) {
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

  document.addEventListener("scroll", () => {
  btnVisibility();
});
  document.addEventListener("click", (e) => {
  e.preventDefault();
  scrollUp();
});