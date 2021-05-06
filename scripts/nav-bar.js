const navBar = document.getElementById("checkbox");
const navFavorites = document.getElementById("nav-favorites");
const navGifos = document.getElementById("nav-gifos");
const mainSection = document.getElementById("main");
const headerLogo = document.getElementById("header__logo");

const favoritesSection = document.getElementById("myfavorites");
const gifosSection = document.getElementById("mygifos");
// my-gifos

headerLogo.addEventListener("click", function (ev) {
    favoritesSection.style.display = 'none';
    gifosSection.style.display = 'none';
    mainSection.style.display = "block";
    searchContainer.style.display = 'none';
    noResultsContainer.style.display = 'none';
})

navFavorites.addEventListener("click", function (ev) {
    favoritesSection.style.display = 'block';
    gifosSection.style.display = 'none';
    predefView();
})

navGifos.addEventListener("click", function (ev) {
    favoritesSection.style.display = 'none';
    gifosSection.style.display = 'block';
    predefView();
})

function predefView() {
    mainSection.style.display = "none";
    searchContainer.style.display = 'none';
    noResultsContainer.style.display = 'none';
    navBar.checked = false;
}