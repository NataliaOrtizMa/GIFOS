const maxGifContainer = document.querySelector(".max-gif");
const trendingGifsContainer = document.getElementById("images-container");
const searchGifsContainer = document.getElementById("search-container");
const favsContainer = document.getElementById("favs-container");
const closeGifBtn = document.getElementById("button-close");
const expandGifBtn = document.getElementById("expand-icon");
const downloadGifBtn = document.getElementById("button-download");
// const favGifBtn = document.getElementById("fav-icon");

const gifUser = document.getElementById("gif-user");
const gifTitle = document.getElementById("gif-title");

function clickGifo(ev) {
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

function addGifInfo(ev) {
    if (ev.target.id === 'carousel-item') {  
        const maxGif = document.querySelector(".figure__img");
        // console.log(maxGif)
        link = ev.target.info.sourceQuality;
        maxGifContainer.style.display = 'block';
        maxGif.src = link;
        maxGif.info = ev.target.info;

        document.querySelector("body").style.overflow = "hidden";
        
        removeAllChildNodes(gifUser);
        removeAllChildNodes(gifTitle);
        gifUser.appendChild(document.createTextNode(ev.target.info.gifUserName));
        gifTitle.appendChild(document.createTextNode(ev.target.info.gifName));

        // if (ev.target.id === 'fav-icon') {
            // console.log(ev.target.id)
            // gifo = ev.target.parentNode.parentNode.previousElementSibling.parentNode;
    
            // favIcon = ev.target;
            const favIcon = maxGif.nextElementSibling.firstElementChild.nextElementSibling;
            // console.log(favIcon)
            // const gifo = document.querySelector(".figure__img")
            const isFav = localStorage.getItem(maxGif.info.gifId);
            const gifInfo = JSON.stringify(maxGif.info);
            if (isFav == null) {
                // localStorage.setItem(maxGif.identifier, gifInfo);
                favIcon.style.backgroundImage = "url('./img/icon-fav.svg')";
            } else {
                // localStorage.removeItem(maxGif.identifier);
                favIcon.style.backgroundImage = "url('./img/icon-fav-active.svg')";
            }
        // }
    }
}

function addGifFav(ev) {
    if (ev.target.id === 'fav-icon') {
        favIcon = ev.target;
        gifo = ev.target.parentNode.parentNode.previousElementSibling.parentNode;
        isFav = localStorage.getItem(gifo.info.gifId);
        const gifInfo = JSON.stringify(gifo.info);
        if (isFav == null) {
            localStorage.setItem(gifo.identifier, gifInfo);
            favIcon.style.backgroundImage = "url('./img/icon-fav-active.svg')";
        } else {
            localStorage.removeItem(gifo.identifier);
            favIcon.style.backgroundImage = "url('./img/icon-fav-hover.svg')";
        }
    }
}

maxGifContainer.addEventListener("click", async function (ev) {
    if (ev.target.id === 'button-download') {
        const maxGif = document.querySelector(".figure__img")
        fetchBlob(maxGif);
    }
    // AQUIIIIIIIIIIIIIIIII
    if (ev.target.id === 'fav-icon') {
        favIcon = ev.target;
        // gifo = ev.target.parentNode.previousElementSibling;
        const gifo = document.querySelector(".figure__img")
        console.log(gifo)
        // gifo = ev.target.parentNode.parentNode.previousElementSibling.parentNode;
        isFav = localStorage.getItem(gifo.info.gifId);
        const gifInfo = JSON.stringify(gifo.info);
        if (isFav == null) {
            localStorage.setItem(gifo.info.gifId, gifInfo);
            favIcon.style.backgroundImage = "url('./img/icon-fav-active.svg')";
        } else {
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
            // localStorage.setItem(gifo.identifier, gifInfo);
            favIcon.style.backgroundImage = "url('./img/icon-fav-hover.svg')";
            // console.log("No existe en local")
        }
        else {
            // localStorage.removeItem(gifo.identifier);
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
            // console.log("No existe en local")
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
            // console.log("No existe en local")
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
})
