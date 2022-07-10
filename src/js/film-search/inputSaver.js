const searchInput = document.querySelector(".header__input")

searchInput.addEventListener("input", e => inputSever(e))

function inputSever(e) {
    ifLastSearch()
    const value = e.target.value
    sessionStorage.setItem('input-value', value.trim());
    console.log(sessionStorage.getItem('input-value'))
}

function ifLastSearch() {
    if (localStorage.getItem("last-search")) {
        localStorage.removeItem("last-search")
    }
}

function inputValue() {
    if (sessionStorage.getItem('input-value')) {
        searchInput.value = sessionStorage.getItem('input-value')
    }
}

inputValue()