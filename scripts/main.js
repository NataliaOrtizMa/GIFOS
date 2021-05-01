function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

async function fetchBlob(img) {
    const imageFetch = await fetch(img.info.downloadUrl);
    let File = await imageFetch.blob();
    const urlBlob = URL.createObjectURL(File);
    img.file = File;
    img.blob = urlBlob;
}

function downloadImage(url,anchor) {
    // const urlBlob = URL.createObjectURL(url);
    // console.log(urlBlob);
    anchor.download = "myImage";
    anchor.href = urlBlob;
}

function hoverItems(elm,usr,title) {
    const hover = `
            <div class="carousel-item__details">
                <div class="carousel-item__icons">
                    <button class="button fav-icon" type="submit"></button>
                    <button class="button expand-icon" id="expand-icon" type="submit"></button>
                    <button class="button download-icon" type="submit"></button>
                </div>
                <div class="carousel-item__text">
                    <p class="carousel-item__text--user">${usr}</p>
                    <p class="carousel-item__text--title">${title}</p>
                </div>
            </div>
        `
    elm.innerHTML += hover;
}