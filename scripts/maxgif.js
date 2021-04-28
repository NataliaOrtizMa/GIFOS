const maxGifContainer = document.querySelector(".max-gif");
const maxGif = document.querySelector(".figure__img");
const trendingGifsContainer = document.getElementById("images-container");
const searchGifsContainer = document.getElementById("search-container");
const closeGifBtn = document.getElementById("button-close");

const gifUser = document.getElementById("gif-user");
const gifTitle = document.getElementById("gif-title");

trendingGifsContainer.addEventListener("click", function (ev) {
    if (ev.target.tagName === 'IMG') {
        link = ev.target.src;
        maxGifContainer.style.display = 'block';
        maxGif.src = link;
        document.querySelector("body").style.overflow = "hidden";
        
        removeAllChildNodes(gifUser);
        removeAllChildNodes(gifTitle);
        gifUser.appendChild(document.createTextNode(ev.target.info.gifUserName));
        gifTitle.appendChild(document.createTextNode(ev.target.info.gifName));
    }
})

searchGifsContainer.addEventListener("click", function (ev) {
    if (ev.target.tagName === 'IMG') {
        link = ev.target.src;
        maxGifContainer.style.display = 'block';
        maxGif.src = link;
        document.querySelector("body").style.overflow = "hidden";

        removeAllChildNodes(gifUser);
        removeAllChildNodes(gifTitle);
        gifUser.appendChild(document.createTextNode(ev.target.info.gifUserName));
        gifTitle.appendChild(document.createTextNode(ev.target.info.gifName));
    }
})

closeGifBtn.addEventListener("click", function(ev) {
    maxGifContainer.style.display = 'none';
    document.querySelector("body").style.overflow = "auto";
})
