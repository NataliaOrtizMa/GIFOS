const maxGifContainer = document.querySelector(".max-gif");
const trendingGifsContainer = document.getElementById("images-container");
const searchGifsContainer = document.getElementById("search-container");
const closeGifBtn = document.getElementById("button-close");
const expandGifBtn = document.getElementById("expand-icon");
const downloadGifBtn = document.getElementById("button-download");
const downloadGifLink = document.getElementById("download-link");
// const maxGifContainer = document.getElementById("max-gif");

const gifUser = document.getElementById("gif-user");
const gifTitle = document.getElementById("gif-title");

function clickGifo(ev) {
    // const imgGif;
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
        console.log(ev.target);
        const maxGif = document.querySelector(".figure__img")
        const imageFetch = await fetch(maxGif.info.downloadUrl);
        let File = await imageFetch.blob();
        const urlBlob = URL.createObjectURL(File);
        // localStorage.setItem(img.info.gifName, urlBlob);
        const anchor = document.createElement("a");
        anchor.download = "myImage";
        anchor.href = urlBlob;
        anchor.click();
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
