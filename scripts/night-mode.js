const body = document.getElementById("body");
const navNight = document.getElementById("nav-night");
const header = document.getElementById("header");
const nav = document.getElementById("nav");
const main = document.getElementById("main");
const searchBar = document.getElementById("search-bar");
const searchBarButton = document.getElementById("search-bar__button");
const searchResults = document.getElementById("search-results");
const trending = document.getElementById("trending");
const footer = document.getElementById("footer");   
const pNight = document.getElementById("p-night");

let nightMode = 0;

navNight.addEventListener("click", function (ev) {

    if (searchButton.style.backgroundImage === 'url("./img/close.svg")') {
        searchButton.style.backgroundImage = "url('./img/close-modo-noct.svg')";
    }
    else {
        if (searchButton.style.backgroundImage === "url(\"./img/close-modo-noct.svg\")") {
            searchButton.style.backgroundImage = "url('./img/close.svg')";
        }
    }
    if (searchButton.style.backgroundImage === 'url("./img/icon-search.svg")') {
        searchButton.style.backgroundImage = "url('./img/icon-search-mod-noc.svg')";
    }
    else {
        if (searchButton.style.backgroundImage === "url(\"./img/icon-search-mod-noc.svg\")") {
            searchButton.style.backgroundImage = "url('./img/icon-search.svg')";
        }
    }

    if (ev.target.textContent == "Modo nocturno") {
        ev.target.textContent = "Modo diurno";
        nightMode = 1;
    }
    else {
        ev.target.textContent = "Modo nocturno";
        nightMode = 0;
    }

    body.classList.toggle("body-night");
    header.classList.toggle("header-night");
    headerLogo.classList.toggle("header-night__logo");
    nav.classList.toggle("nav-night");
    main.classList.toggle("main-night");
    searchBar.classList.toggle("search-bar-night");
    input.classList.toggle("search-bar-night__input");
    searchResults.classList.toggle("search-results-night");
    favoritesSection.classList.toggle("favorites-night");
    gifosSection.classList.toggle("mis-gifos-night");
    trending.classList.toggle("trending-night");
    pNight.classList.toggle("trending-night__p");
    footer.classList.toggle("footer-night");
    moreButton.classList.toggle("watch-more-button-night");

    // Areglar media icons hover
    // Arreglar link active quitar underline mint
})