const maxGifContainer = document.querySelector(".max-gif");
const trendingGifsContainer = document.getElementById("images-container");
const searchGifsContainer = document.getElementById("search-container");
const closeGifBtn = document.getElementById("button-close");
const expandGifBtn = document.getElementById("expand-icon");

const gifUser = document.getElementById("gif-user");
const gifTitle = document.getElementById("gif-title");

trendingGifsContainer.addEventListener("click", function (ev) {
    if (ev.target.tagName === 'IMG') {
        const maxGif = document.querySelector(".figure__img");
        link = ev.target.info.sourceQuality;
        maxGifContainer.style.display = 'block';
        maxGif.src = link;
        maxGif.info = ev.target.info;
        maxGif.file = ev.target.file;

        document.querySelector("body").style.overflow = "hidden";
        
        removeAllChildNodes(gifUser);
        removeAllChildNodes(gifTitle);
        gifUser.appendChild(document.createTextNode(ev.target.info.gifUserName));
        gifTitle.appendChild(document.createTextNode(ev.target.info.gifName));

        const downloadLink = document.querySelector("download-link");
        const file = ev.target.file;
        
        // downloadLink.download = `${ev.target.info.gifName}`;
        // downloadLink.href = ev.target.blob;
        // maxGif.addEventListener('load', (ev) => {
        // downloadLink.style.visibility = 'visible'
        // })
        
        // downloadImage(file,downloadLink);
    }
})

// trendingGifsContainer.addEventListener("mouseover", function(ev) {
    
//     if (ev.target.tagName === 'IMG') {
//         // console.log(ev.target.tagName);
//         const hover = `
//             <div class="carousel-item__details">
//                 <div class="carousel-item__icons">
//                     <button class="button fav-icon" type="submit"></button>
//                     <button class="button expand-icon" type="submit"></button>
//                     <button class="button download-icon" type="submit"></button>
//                 </div>
//                 <div class="carousel-item__text">
//                     <p class="carousel-item__text--user">User</p>
//                     <p class="carousel-item__text--title">Título GIFO</p>
//                 </div>
//             </div>
//         `
//         const maxGif = document.querySelector(".carousel-item");
//         maxGif.innerHTML += hover;
//         // maxGif.append(hover);

//         // console.log("Hover!");
//     }
//     // console.log("Hover!")
// })

// trendingGifsContainer.addEventListener("mouseout", function(ev) {
    
//     if (ev.target.tagName === "DIV") {
//         console.log(ev.target.tagName);        
//         const maxGif = document.querySelector(".carousel-item");
//         const div = document.querySelector(".carousel-item__details");
//         // carousel-item__details
//         div.remove();
//         // maxGif.innerHTML += hover;
//         // maxGif.append(hover);

//         // console.log("Des Hover!");
//     }
//     // console.log("Hover!")
// })

searchGifsContainer.addEventListener("click", function (ev) {
    if (ev.target.tagName === 'IMG') {
        const maxGif = document.querySelector(".figure__img");
        link = ev.target.info.sourceQuality;
        maxGifContainer.style.display = 'block';
        maxGif.src = link;
        maxGif.info = ev.target.info;
        maxGif.file = ev.target.file;

        document.querySelector("body").style.overflow = "hidden";

        removeAllChildNodes(gifUser);
        removeAllChildNodes(gifTitle);
        gifUser.appendChild(document.createTextNode(ev.target.info.gifUserName));
        gifTitle.appendChild(document.createTextNode(ev.target.info.gifName));

        // const downloadLink = document.getElementById("download-link");
        // const file = ev.target.file;
        // downloadLink.download = `${ev.target.info.gifName}`;
        // downloadLink.href = ev.target.blob;
        // downloadLink.style.visibility = 'visible'
        // downloadImage(file,downloadLink);
    }
})



closeGifBtn.addEventListener("click", function(ev) {
    maxGifContainer.style.display = 'none';
    document.querySelector("body").style.overflow = "auto";
})
