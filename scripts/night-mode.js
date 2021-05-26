const body = document.getElementById("body");
const navNight = document.getElementById("nav-night");
const header = document.getElementById("header");
const nav = document.getElementById("nav");
const main = document.getElementById("main");
const searchBar = document.getElementById("search-bar");
const searchBarButton = document.getElementById("search-bar__button");
const searchResults = document.getElementById("search-results");
const trending = document.getElementById("trending");
const cameraImg = document.getElementById("camera-img");
const peliculaImg = document.getElementById("pelicula-img");
const footer = document.getElementById("footer");   
const pNight = document.getElementById("p-night");
const facebookIcon = document.getElementById("facebook-icon");
const twitterIcon = document.getElementById("twitter-icon");
const instagramIcon = document.getElementById("instagram-icon");

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
    navFavorites.addEventListener("click", function (ev) {
        searchBarButton.classList.add("search-bar-night__button");
        
    })

    body.classList.toggle("body-night");
    header.classList.toggle("header-night");
    headerLogo.classList.toggle("header-night__logo");
    nav.classList.toggle("nav-night");
    navMore.classList.toggle("nav-more-night");
    main.classList.toggle("main-night");
    searchBar.classList.toggle("search-bar-night");
    input.classList.toggle("search-bar-night__input");
    searchResults.classList.toggle("search-results-night");
    favoritesSection.classList.toggle("favorites-night");
    gifosSection.classList.toggle("mis-gifos-night");
    createGifoSection.classList.toggle("mis-gifos-night");
    cameraImg.classList.toggle("camera-img-night");
    peliculaImg.classList.toggle("pelicula-img-night");
    trending.classList.toggle("trending-night");
    pNight.classList.toggle("trending-night__p");
    footer.classList.toggle("footer-night");
    moreButton.classList.toggle("watch-more-button-night");
    facebookIcon.classList.toggle("facebook-icon-night");
    twitterIcon.classList.toggle("twitter-icon-night");
    instagramIcon.classList.toggle("instagram-icon-night");
})

// Fix search button noc when clicking favs 