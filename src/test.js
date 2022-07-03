// код просто перенсти в  основний js //

async function fetchGetFilmName() {
    const name = document.querySelector(".header__input").value
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&query=${name}&page=1&include_adult=false`
  );
    console.log(data)
    const dataGenres = await getGenresList();
    console.log(dataGenres) 
    const { results, total_pages, page, total_results } = data;
    return { results, total_pages, page, total_results, dataGenres };
}

const searchSubmit = document.querySelector(".header__form") 
searchSubmit.addEventListener("submit", e => {
    e.preventDefault
    fetchGetFilmName()
})