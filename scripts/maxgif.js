const maxGifContainer = document.querySelector(".max-gif");
const trendingGifsContainer = document.getElementById("images-container");
const searchGifsContainer = document.getElementById("search-container");
const closeGifBtn = document.getElementById("button-close");
const expandGifBtn = document.getElementById("expand-icon");
const downloadGifBtn = document.getElementById("button-download");
// const downloadGifLink = document.getElementById("download-link");
// const maxGifContainer = document.getElementById("max-gif");

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
        link = ev.target.info.sourceQuality;
        maxGifContainer.style.display = 'block';
        maxGif.src = link;
        maxGif.info = ev.target.info;

        document.querySelector("body").style.overflow = "hidden";
        
        removeAllChildNodes(gifUser);
        removeAllChildNodes(gifTitle);
        gifUser.appendChild(document.createTextNode(ev.target.info.gifUserName));
        gifTitle.appendChild(document.createTextNode(ev.target.info.gifName));
    }
}

maxGifContainer.addEventListener("click", async function (ev) {
    if (ev.target.id === 'button-download') {
        const maxGif = document.querySelector(".figure__img")
        fetchBlob(maxGif);
    }
})

trendingGifsContainer.addEventListener("mouseover", async function (ev) {
    if (ev.target.id === 'button-download') {
        ev.target.addEventListener("click", async function (ev) {
            imgGif = ev.target.parentNode.parentNode.previousElementSibling.parentNode;
            fetchBlob(imgGif);
        }) 
    }
})

searchGifsContainer.addEventListener("mouseover", async function (ev) {
    if (ev.target.id === 'button-download') {
        ev.target.addEventListener("click", async function (ev) {
            imgGif = ev.target.parentNode.parentNode.previousElementSibling.parentNode;
            fetchBlob(imgGif);
        }) 
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

closeGifBtn.addEventListener("click", function(ev) {
    maxGifContainer.style.display = 'none';
    document.querySelector("body").style.overflow = "auto";
})
