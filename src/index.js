import fetchTrendingFilms from './js/queries/fetchTrendingFilms';
import searchFilms from './js/film-search/searchFilms';
import createFilmList from './js/pagination/createFilmList';
import renderModal from './js/modal/modalRender';
import createModal from './js/modal-close.js';
import currentSession from './js/current-session/currentSession'

createFilmList();
currentSession();
