const maxGifContainer = document.querySelector(".max-gif");
const trendingGifsContainer = document.getElementById("images-container");
const searchGifsContainer = document.getElementById("search-container");
const favsContainer = document.getElementById("favs-container");
const closeGifBtn = document.getElementById("button-close");
const expandGifBtn = document.getElementById("expand-icon");
const downloadGifBtn = document.getElementById("button-download");

const gifUser = document.getElementById("gif-user");
const gifTitle = document.getElementById("gif-title");

function clickGifo(ev) {
    
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        if (ev.target.id == 'carousel-item__img') {
            imgGif = ev.target.parentNode;
            imgGif.click();
        }
    }
    else{
        if (ev.target.id === 'expand-icon') {
            imgGif = ev.target.parentNode.parentNode.previousElementSibling.parentNode;
            imgGif.click();
        }
        if (ev.target.id === 'carousel-item__details') {
            imgGif = ev.target.previousElementSibling.parentNode;
            imgGif.click();
        }
        if (ev.target.id === 'item-user' || ev.target.id === 'item-title') {
            imgGif = ev.target.parentNode.parentNode;
            imgGif.click();
        }
    }
}

function addGifInfo(ev) {
    if (ev.target.id === 'carousel-item') {  
        console.log("Si sirve")
        const maxGif = document.querySelector(".figure__img");

        link = ev.target.info.sourceQuality;
        maxGifContainer.style.display = 'block';
        maxGif.src = link;
        maxGif.info = ev.target.info;

        document.querySelector("body").style.overflow = "hidden";
        
        removeAllChildNodes(gifUser);
        removeAllChildNodes(gifTitle);
        gifUser.appendChild(document.createTextNode(ev.target.info.gifUserName));
        gifTitle.appendChild(document.createTextNode(ev.target.info.gifName));

        const favIcon = maxGif.nextElementSibling.firstElementChild.nextElementSibling;
        const isFav = localStorage.getItem(maxGif.info.gifId);
        const gifInfo = JSON.stringify(maxGif.info);
        if (isFav == null) {
            favIcon.style.backgroundImage = "url('./img/icon-fav.svg')";
        } 
        else {
            favIcon.style.backgroundImage = "url('./img/icon-fav-active.svg')";
        }
    }
}

function addGifFav(ev) {
    if (ev.target.id === 'fav-icon') {
        favIcon = ev.target;
        gifo = ev.target.parentNode.parentNode.previousElementSibling.parentNode;
        isFav = localStorage.getItem(gifo.info.gifId);
        const gifInfo = JSON.stringify(gifo.info);
        
        if (isFav == null) {  //If the gifo is not in localStorage
            localStorage.setItem(gifo.info.gifId, gifInfo);
            favIcon.style.backgroundImage = "url('./img/icon-fav-active.svg')";
            if (favoritesSection.style.display == 'block') {
                if(localStorage.length == 1) {
                    favoritesResults.style.display = 'block';
                    favoritesNoResults.style.display = 'none';
                }
                cln = gifo.cloneNode(true);
                cln.info = gifo.info;
                favsContainer.appendChild(cln);
            }
        } else {
            localStorage.removeItem(gifo.info.gifId);
            favIcon.style.backgroundImage = "url('./img/icon-fav-hover.svg')";
            if (favoritesSection.style.display == 'block') {
                favsContainer.removeChild(gifo);
                if(localStorage.length == 0) {
                    favoritesNoResults.style.display = 'block';
                    favoritesResults.style.display = 'none';
                } 
            }
        }
    }
}

maxGifContainer.addEventListener("click", async function (ev) {
    if (ev.target.id === 'button-download') {
        const maxGif = document.querySelector(".figure__img")
        fetchBlob(maxGif);
    }
    if (ev.target.id === 'fav-icon') {
        favIcon = ev.target;
        const gifo = document.querySelector(".figure__img");
        isFav = localStorage.getItem(gifo.info.gifId);
        const gifInfo = JSON.stringify(gifo.info);
        if (isFav == null) {
            localStorage.setItem(gifo.info.gifId, gifInfo);
            favIcon.style.backgroundImage = "url('./img/icon-fav-active.svg')";
        } 
        else {
            localStorage.removeItem(gifo.info.gifId);
            favIcon.style.backgroundImage = "url('./img/icon-fav-hover.svg')";
        }
        console.log(localStorage)
    }
})

trendingGifsContainer.addEventListener("mouseover", async function (ev) {
    if (ev.target.id === 'button-download') {
        ev.target.addEventListener("click", async function (ev) {
            imgGif = ev.target.parentNode.parentNode.previousElementSibling.parentNode;
            fetchBlob(imgGif);
        }) 
    }
    if (ev.target.id === 'carousel-item__details') {
        const favIcon = ev.target.firstElementChild.firstElementChild;
        gifo = ev.target.previousElementSibling.parentNode;
        isFav = localStorage.getItem(gifo.info.gifId);
        if (isFav == null){
            favIcon.style.backgroundImage = "url('./img/icon-fav-hover.svg')";
        }
        else {
            favIcon.style.backgroundImage = "url('./img/icon-fav-active.svg')";
        }
    }
})
searchGifsContainer.addEventListener("mouseover", async function (ev) {
    if (ev.target.id === 'button-download') {
        ev.target.addEventListener("click", async function (ev) {
            imgGif = ev.target.parentNode.parentNode.previousElementSibling.parentNode;
            fetchBlob(imgGif);
        }) 
    }
    if (ev.target.id === 'carousel-item__details') {
        favIcon = ev.target.firstElementChild.firstElementChild;
        gifo = ev.target.previousElementSibling.parentNode;
        isFav = localStorage.getItem(gifo.info.gifId);
        if (isFav == null){
            favIcon.style.backgroundImage = "url('./img/icon-fav-hover.svg')";
        }
        else {
            favIcon.style.backgroundImage = "url('./img/icon-fav-active.svg')";
        }
    }
})
favsContainer.addEventListener("mouseover", async function (ev) {
    if (ev.target.id === 'button-download') {
        ev.target.addEventListener("click", async function (ev) {
            imgGif = ev.target.parentNode.parentNode.previousElementSibling.parentNode;
            fetchBlob(imgGif);
        }) 
    }
    if (ev.target.id === 'carousel-item__details') {
        favIcon = ev.target.firstElementChild.firstElementChild;
        gifo = ev.target.previousElementSibling.parentNode;
        isFav = localStorage.getItem(gifo.info.gifId);
        if (isFav == null){
            favIcon.style.backgroundImage = "url('./img/icon-fav-hover.svg')";
        }
        else {
            favIcon.style.backgroundImage = "url('./img/icon-fav-active.svg')";
        }
    }
})

trendingGifsContainer.addEventListener("click", function (ev) {
    maxGif = clickGifo(ev);
    addGifInfo(ev);
})
searchGifsContainer.addEventListener("click", function (ev) {
    clickGifo(ev);
    addGifInfo(ev);
})
favsContainer.addEventListener("click", function (ev) {
    clickGifo(ev);
    addGifInfo(ev);
})

trendingGifsContainer.addEventListener("click", function (ev) {
    addGifFav(ev);
})
searchGifsContainer.addEventListener("click", function (ev) {
    addGifFav(ev);
})
favsContainer.addEventListener("click", function (ev) {
    addGifFav(ev);
})

closeGifBtn.addEventListener("click", function(ev) {
    maxGifContainer.style.display = 'none';
    document.querySelector("body").style.overflow = "auto";
    if (favoritesSection.style.display == 'block') {
        navFavorites.click();
    }
})
