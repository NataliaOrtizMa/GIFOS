function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

async function fetchBlob(img) {
    const imageFetch = await fetch(img.info.downloadUrl);
    let File = await imageFetch.blob();
    const urlBlob = URL.createObjectURL(File);
    const anchor = document.createElement("a");
    anchor.download = img.info.gifName;
    anchor.href = urlBlob;
    anchor.click();
}

function hoverItems(elm,usr,title) {
    const itemDetails = document.createElement("div");
    itemDetails.classList.add("carousel-item__details");
    itemDetails.id = "carousel-item__details";
    const hover = `
                <div class="carousel-item__icons">
                    <button class="button fav-icon" id="fav-icon" type="submit"></button>
                    <button class="button download-icon" id="button-download" type="submit"></button>
                    <button class="button expand-icon" id="expand-icon" type="submit"></button>
                </div>
                <div class="carousel-item__text">
                    <p class="carousel-item__text--user" id='item-user'>${usr}</p>
                    <p class="carousel-item__text--title" id='item-title'>${title}</p>
                </div>
        `
    itemDetails.innerHTML = hover;
    elm.appendChild(itemDetails);
}

// Add hover buttons
function hoverMyGifos(elm,usr,title) {
    const itemDetails = document.createElement("div");
    itemDetails.classList.add("carousel-item__details");
    itemDetails.id = "carousel-item__details";
    const hover = `
                <div class="carousel-item__icons">
                    <button class="button trash-icon" id="trash-icon" type="submit"></button>
                    <button class="button download-icon" id="button-download" type="submit"></button>
                    <button class="button expand-icon" id="expand-icon" type="submit"></button>
                </div>
                <div class="carousel-item__text">
                    <p class="carousel-item__text--user" id='item-user'>${usr}</p>
                    <p class="carousel-item__text--title" id='item-title'>${title}</p>
                </div>
        `
    itemDetails.innerHTML = hover;
    elm.appendChild(itemDetails);
}