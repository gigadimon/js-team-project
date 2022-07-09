let darkMode = false;
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  darkMode = true;
}
if (localStorage.getItem('theme') === 'dark') {
  darkMode = true;
} else if (localStorage.getItem('theme') === 'light') {
  darkMode = false;
}
if (darkMode) {
  document.body.classList.toggle('dark-theme');
}
document.querySelector('.tumbler').addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
});