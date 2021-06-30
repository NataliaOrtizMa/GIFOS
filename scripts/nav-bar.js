const navBar = document.getElementById("checkbox");
const navFavorites = document.getElementById("nav-favorites");
const navGifos = document.getElementById("nav-gifos");
const navMore = document.getElementById("nav-more");
const mainSection = document.getElementById("main");
const headerLogo = document.getElementById("header__logo");

const favoritesSection = document.getElementById("favorites");
const favoritesNoResults = document.getElementById("favorites__no-results");
const favoritesResults = document.getElementById("favorites__results");

const gifosSection = document.getElementById("mygifos");
const mygifosNoResults = document.getElementById("gifos__no-results");
const mygifosResults = document.getElementById("gifos__results");
const mygifosContainer = document.getElementById("mygifos-container");

const createGifoSection = document.getElementById("create-gifo");
const trendingSection = document.getElementById("trending");

headerLogo.addEventListener("click", function (ev) {
    favoritesSection.style.display = 'none';
    createGifoSection.style.display = 'none';
    gifosSection.style.display = 'none';
    mainSection.style.display = "block";
    searchContainer.style.display = 'none';
    trendingSection.style.display = 'block';
    noResultsContainer.style.display = 'none';
    navBar.checked = false;
    if(nightMode == true) {
        searchButton.style.backgroundImage = "url(\"./img/icon-search-mod-noc.svg\")"
    }
    else {
        searchButton.style.backgroundImage = "url('./img/icon-search.svg')";
    }
})

let favsCount = 0;
navFavorites.addEventListener("click", function (ev) {
    favsCount = 0;
    input.value = '';
    searchButton.style.backgroundImage = "url('./img/icon-search.svg')";

    favoritesSection.style.display = 'block';
    gifosSection.style.display = 'none';
    createGifoSection.style.display = 'none';
    trendingSection.style.display = 'block';
    predefView();
    if (localStorage.length == 0) {
        favoritesNoResults.style.display = 'block';
        favoritesResults.style.display = 'none';
    } else {
        removeAllChildNodes(favsContainer);
        favoritesNoResults.style.display = 'none';
        favoritesResults.style.display = 'block';
        
        for (i=0; i< localStorage.length; i++) {

            var KeyName = window.localStorage.key(i);
            const gifInfo = localStorage.getItem(KeyName);
            const Gif = JSON.parse(gifInfo);
            
            if (!Gif.isMine) {
                favsCount += 1;
                console.log(favsCount)
                const galleryItem = document.createElement('div');
                galleryItem.classList.add("carousel-item");
                galleryItem.id = "carousel-item";
                const imagen = document.createElement('img');
                imagen.classList.add("carousel-item__img");
                imagen.style.display = 'inline';
                imagen.id = ("carousel-item__img");

                imagen.info = Gif;
                imagen.src = Gif.source;
        
                galleryItem.info = Gif;
                galleryItem.gifId = Gif.gifId;
                galleryItem.append(imagen);

                if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
                } 
                else{
                    hoverItems(galleryItem,imagen.info.gifUserName, imagen.info.gifName);
                }
                favsContainer.append(galleryItem);
            }
        }
        if (favsCount == 0) {
            favoritesNoResults.style.display = 'block';
            favoritesResults.style.display = 'none';
        }
    }
    
})

let mygifosCount = 0;
navGifos.addEventListener("click", function (ev) {
    mygifosCount = 0;
    input.value = '';
    favoritesSection.style.display = 'none';
    gifosSection.style.display = 'block';
    createGifoSection.style.display = 'none';
    trendingSection.style.display = 'block';
    predefView();
    if (localStorage.length == 0) {
        mygifosNoResults.style.display = 'block';
        mygifosResults.style.display = 'none';
    } else {
        removeAllChildNodes(mygifosContainer);
        mygifosNoResults.style.display = 'none';
        mygifosResults.style.display = 'block';
        
        for (i=0; i< localStorage.length; i++) {

            var KeyName = window.localStorage.key(i);
            const gifInfo = localStorage.getItem(KeyName);
            const Gif = JSON.parse(gifInfo);
            
            if (Gif.isMine) {
                mygifosCount += 1;
                console.log(mygifosCount)
                const galleryItem = document.createElement('div');
                galleryItem.classList.add("carousel-item");
                galleryItem.id = "carousel-item";
                const imagen = document.createElement('img');
                imagen.classList.add("carousel-item__img");
                imagen.style.display = 'inline';
                imagen.id = ("carousel-item__img");

                imagen.info = Gif;
                imagen.src = Gif.source;
        
                galleryItem.info = Gif;
                galleryItem.gifId = Gif.gifId;
                galleryItem.append(imagen);

                if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
                } 
                else{
                    hoverMyGifos(galleryItem,imagen.info.gifUserName, imagen.info.gifName);
                }
                mygifosContainer.append(galleryItem);
            }
        }
        if (mygifosCount == 0) {
            mygifosNoResults.style.display = 'block';
            mygifosResults.style.display = 'none';
        }
    }
})

navMore.addEventListener("click", function (ev) {
    createGifoSection.style.display = 'block';
    trendingSection.style.display = 'none';
    favoritesSection.style.display = 'none';
    gifosSection.style.display = 'none';
    predefView();
    searchbar.classList.remove("sticky-header");
    
})

function predefView() {
    mainSection.style.display = "none";
    searchContainer.style.display = 'none';
    noResultsContainer.style.display = 'none';
    navBar.checked = false;
}