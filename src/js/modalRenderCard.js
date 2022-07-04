import axios from 'axios';
import getFilmGenresNameArray from './getFilmGenresNameArray';
import makeMovieTrandingCards from './makeMovieTrandingCards';
import Pagination from './paganathion';

const refs = {
    poster: document.querySelector('.modal__card-poster'),
    filmName: document.querySelector('.modal__card-title'),
    vote: document.querySelector('.modal__card-vote'),
    votes: document.querySelector('.modal__card-votes'),
    popularity: document.querySelector('.modal__card-popularity'),
    originalTitle: document.querySelector('.modal__card-original-title'),
    genre: document.querySelector('.modal__card-genre'),
    cardDiscription: document.querySelector('.modal__card-discription'),
}
let imgCard = document.querySelector('.film__img');
console.log(imgCard)
function renderCardModal (){
    refs.poster.src = '';
    refs.filmName.textContent ='';
    refs.vote.textContent ='';
    refs.votes.textContent ='';
    refs.popularity.textContent ='';
    refs.originalTitle.textContent ='';
    refs.genre.textContent ='';
    refs.cardDiscription.textContent ='';

}

