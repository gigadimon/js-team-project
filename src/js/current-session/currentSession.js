import createFilmListTrending from '../pagination/createFilmList';
import createFilmListSearch from '../film-search/searchFilms'


export default function currentSession() {
    try {
        const { input, page } = JSON.parse(localStorage.getItem("last-search"))
        document.querySelector(".header__input").value = input
        createFilmListSearch(input, page)
    } catch {
        createFilmListTrending()
    }
}