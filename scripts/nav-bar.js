const navBar = document.getElementById("checkbox");
const navFavorites = document.getElementById("nav-favorites");
const navGifos = document.getElementById("nav-gifos");
const mainSection = document.getElementById("main");

const favoritesSection = document.getElementById("myfavorites");
const gifosSection = document.getElementById("mygifos");
// my-gifos

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