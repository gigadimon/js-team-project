const langMainArr = [
  (mainInput = {
    selector: 'mainInput',
    placeholder: true,
    en: 'Movie search',
    ua: 'Пошук фільмів',
  }),
  (yearInput = {
    selector: 'yearInput',
    placeholder: true,
    en: 'Year',
    ua: 'Рік',
  }),
  (home = {
    selector: 'home',
    en: 'Home',
    ua: 'Головна',
  }),
  (library = {
    selector: 'library',
    en: 'My library',
    ua: 'Моя бібліотека',
  }),
  (mainSignIn = {
    selector: 'mainSignIn',
    en: 'sign-in',
    ua: 'увійти',
  }),
  (signOut = {
    selector: 'signOut',
    en: 'sign out',
    ua: 'вийти',
  }),
  (choose = {
    selector: 'choose',
    en: 'Choose genre',
    ua: 'Оберіть жанр',
  }),
  (action = {
    selector: 'action',
    en: 'Action',
    ua: 'Екшн',
  }),
  (adventure = {
    selector: 'adventure',
    en: 'Adventure',
    ua: 'Пригода',
  }),
  (animation = {
    selector: 'animation',
    en: 'Animation',
    ua: 'Мультфільм',
  }),
  (comedy = {
    selector: 'comedy',
    en: 'Comedy',
    ua: 'Комедія',
  }),
  (crime = {
    selector: 'crime',
    en: 'Crime',
    ua: 'Кримінал',
  }),
  (documental = {
    selector: 'documental',
    en: 'Documentary',
    ua: 'Документальний',
  }),
  (rights = {
    selector: 'rights',
    en: 'All Rights Reserved',
    ua: 'Усі Права Захищені',
  }),
  (developed = {
    selector: 'developed',
    en: 'Developed with',
    ua: 'Розроблено з',
  }),
  (by = {
    selector: 'by',
    en: 'by',
    ua: '',
  }),
  (students = {
    selector: 'students',
    en: 'GoIT Students',
    ua: 'студентами GoIT',
  }),
  (drama = {
    selector: 'drama',
    en: 'Drama',
    ua: 'Драма',
  }),
  (family = {
    selector: 'family',
    en: 'Family',
    ua: 'Сімейний',
  }),
  (fantasy = {
    selector: 'fantasy',
    en: 'Fantasy',
    ua: 'Фентезі',
  }),
  (history = {
    selector: 'history',
    en: 'History',
    ua: 'Історичний',
  }),
  (horror = {
    selector: 'horror',
    en: 'Horror',
    ua: 'Жахи',
  }),
  (music = {
    selector: 'music',
    en: 'Music',
    ua: 'Музикальний',
  }),
  (mystery = {
    selector: 'mystery',
    en: 'Mystery',
    ua: 'Детектив',
  }),
  (romance = {
    selector: 'romance',
    en: 'Romance',
    ua: 'Романтика',
  }),
  (science = {
    selector: 'science',
    en: 'Science Fiction',
    ua: 'Наукова фантастика',
  }),
  (moovie = {
    selector: 'moovie',
    en: 'TV Moovie',
    ua: 'Телевізійний фільм',
  }),
  (thriller = {
    selector: 'thriller',
    en: 'Thriller',
    ua: 'Трилер',
  }),
  (war = {
    selector: 'war',
    en: 'War',
    ua: 'Війна',
  }),
  (western = {
    selector: 'team',
    en: 'Western',
    ua: 'Вестерн',
  }),
  (watched = {
    selector: 'watched',
    en: 'watched',
    ua: 'переглянуті',
  }),
  (queue = {
    selector: 'queue',
    en: 'queue',
    ua: 'черга',
  }),
  (clear = {
    selector: 'clear',
    en: 'clear',
    ua: 'очистити',
  }),
];

const langFilmModalArr = [
  (vote = {
    selector: 'vote',
    en: 'Vote/Votes',
    ua: 'Рейтинг/Кількість голосів',
  }),
  (popular = {
    selector: 'popular',
    en: 'Popularity',
    ua: 'Популярність',
  }),
  (title = {
    selector: 'title',
    en: 'Original Title',
    ua: 'Назва',
  }),
  (genre = {
    selector: 'genre',
    en: 'Genre',
    ua: 'Жанр',
  }),
  (authors = {
    selector: 'authors',
    en: 'Authors',
    ua: 'Автори',
  }),
  (show = {
    selector: 'show',
    en: 'show',
    ua: 'подивитись',
  }),
  (about = {
    selector: 'about',
    en: 'About',
    ua: 'Про фільм',
  }),
  (addWatched = {
    selector: 'addWatched',
    en: 'ADD TO WATCHED',
    ua: 'ДОДАТИ ДО ПЕРЕГЛЯНУТИХ',
  }),
  (addQueue = {
    selector: 'addQueue',
    en: 'ADD TO QUEUE',
    ua: 'ДОДАТИ В ЧЕРГУ',
  }),
];

const langAuthModalArr = [
  (regTitle = {
    selector: 'regTitle',
    en: 'Registration',
    ua: 'Реєстрація',
  }),
  (authTitle = {
    selector: 'authTitle',
    en: 'Authorization',
    ua: 'Авторизація',
  }),
  (authEmailLabel = {
    selector: 'authEmailLabel',
    en: 'Enter your email:',
    ua: 'Введіть свій email',
  }),
  (authPasswordLabel = {
    selector: 'authPasswordLabel',
    en: 'Enter your password:',
    ua: 'Введіть свій пароль',
  }),
  (regEmailLabel = {
    selector: 'regEmailLabel',
    en: 'Enter your email:',
    ua: 'Введіть свій email',
  }),
  (regPasswordLabel = {
    selector: 'regPasswordLabel',
    en: 'Enter your password:',
    ua: 'Введіть свій пароль',
  }),
  (signUp = {
    selector: 'signUp',
    en: 'sign-up',
    ua: 'зареєструватися',
  }),
  (signIn = {
    selector: 'signIn',
    en: 'sign-in',
    ua: 'увійти',
  }),
  (authSeparator = {
    selector: 'authSeparator',
    en: 'or',
    ua: 'чи',
  }),
  (regSeparator = {
    selector: 'regSeparator',
    en: 'or',
    ua: 'чи',
  }),
  (anywayReg = {
    selector: 'anywayReg',
    en: 'Create a new account',
    ua: 'Створити новий акаунт',
  }),
  (alreadyReg = {
    selector: 'alreadyReg',
    en: 'I already have an account',
    ua: 'В мене вже є акаунт',
  }),
];

const langFooterModalArr = [
  (team = {
    selector: 'team',
    en: 'Team GoIT Students',
    ua: 'Команда студентів GoIT',
  }),
  (yulia = {
    selector: 'yulia',
    en: 'Yulia',
    ua: 'Юлія',
  }),
  (dmytro = {
    selector: 'dmytro',
    en: 'Dmytro',
    ua: 'Дмитро',
  }),
  (yuriy = {
    selector: 'yuriy',
    en: 'Yuriy',
    ua: 'Юрій',
  }),
  (vitaliy = {
    selector: 'vitaliy',
    en: 'Vitaliy',
    ua: 'Віталій',
  }),
  (anton = {
    selector: 'anton',
    en: 'Anton',
    ua: 'Антон',
  }),
  (volodymyr = {
    selector: 'volodymyr',
    en: 'Volodymyr',
    ua: 'Володимир',
  }),
  (vladyslav = {
    selector: 'vladyslav',
    en: 'Vladyslav',
    ua: 'Владислав',
  }),
  (scrum = {
    selector: 'scrum',
    en: 'Scrum Master',
    ua: 'Скрам Майстер',
  }),
  (lead = {
    selector: 'lead',
    en: 'Team Lead',
    ua: 'Тім Лід',
  }),
  (dev = {
    selector: 'dev',
    en: 'Developer',
    ua: 'Розробник',
  }),
];

const langAuthorModalArr = [
  (goBack = {
    selector: 'goBack',
    en: 'Go to back',
    ua: 'Повернутися назад',
  }),
];
export {
  langMainArr,
  langFilmModalArr,
  langAuthModalArr,
  langFooterModalArr,
  langAuthorModalArr,
};
