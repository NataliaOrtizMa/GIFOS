const input = document.querySelector("#search-bar__input");
const trendContainer = document.getElementById("trends-container");
const searchContainer = document.querySelector(".search-results");
const noResultsContainer = document.querySelector(".no-results");
const searchTitle = document.getElementById("search-title");
const suggestionsList = document.querySelector('#suggestions-list');
const divsuggestionsList = document.querySelector(".search-bar__results");
const searchdiv = document.getElementById("search-container");
const button = document.querySelector("#more-results-btn");
const searchButton = document.querySelector(".search-bar__button");
const searchBarIcon = document.querySelector(".search-bar__icon");

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild);
    }
}

async function displayGifos(texto, count) {
    const searchResults = await search(texto,count);
    const searchCount = searchResults.pagination['total_count'];

    if (searchCount == 0) {
        noResultsContainer.style.display = 'block';
        searchContainer.style.display = 'none';
    }
    
    else {
        removeAllChildNodes(searchTitle);
        removeAllChildNodes(searchdiv);
        button.style.display = 'inline-block';
        searchContainer.style.display = 'block';
        
        searchTitle.appendChild(document.createTextNode(capitalize(texto)));
        
        gifosGallery(searchResults);
        count+=12;
    }
}

async function gifosGallery(searchResults) {
    for(var i=0; i<12; i++) {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add("carousel-item");
        galleryItem.id = "carousel-item";
        const imagen = document.createElement('img');
        imagen.classList.add("carousel-item__img");
        imagen.style.display = 'inline';

        let Gif = {
            source: searchResults.data[i].images.fixed_width_still.url,
            sourceQuality: searchResults.data[i].images.fixed_width.webp,
            downloadUrl: searchResults.data[i].images.original.url,
            gifUserName: searchResults.data[i].username ? searchResults.data[i].username : 'No Username',
            gifName: searchResults.data[i].title ? searchResults.data[i].title : 'No Title',
            gifId: searchResults.data[i].id,
        };
        imagen.info = Gif;
        imagen.src = Gif.source;

        galleryItem.info = Gif;
        galleryItem.gifId = Gif.gifId;
        
        galleryItem.append(imagen);
        hoverItems(galleryItem,imagen.info.gifUserName, imagen.info.gifName);
        searchdiv.append(galleryItem);
    }
}

input.oninput = async function() {
    let entry = input.value;
    const autoTerms = await autocomplete(entry);
    removeAllChildNodes(suggestionsList);
    suggestionsList.style.display = 'block';
    divsuggestionsList.style.display = 'block';
    searchButton.style.backgroundImage = "url('./img/close.svg')";

    if (entry.length == 0 || (autoTerms.data.length == 0)) {
        divsuggestionsList.style.display = 'none';
        searchBarIcon.style.visibility = 'hidden';
    }
    else {
        searchBarIcon.style.visibility = 'visible';
        searchBarIcon.style.backgroundImage = "url('./img/search-big.svg')";
        for(let i=0; i<autoTerms.data.length; i++) {
            const suggestionItem = document.createElement('li');
            suggestionItem.textContent = autoTerms.data[i].name;
            suggestionsList.append(suggestionItem);
        }
    }
};

input.addEventListener("keyup", async function (ev) {
    if (ev.which == 13 || ev.keyCode == 13) {
        texto = input.value;
        suggestionsList.style.display = 'none';
        divsuggestionsList.style.display = 'none';
        searchBarIcon.style.visibility = 'hidden';
        count = 0;
        displayGifos(texto, count);
        input.blur();
    }
})

suggestionsList.addEventListener("click", async function (ev) {
    if (ev.target.tagName === 'LI') {
        texto = ev.target.textContent;
        input.value = texto;
        suggestionsList.style.display = 'none';
        divsuggestionsList.style.display = 'none';
        searchBarIcon.style.visibility = 'hidden';
        count = 0;
        displayGifos(texto, count);
      }  
});

searchButton.addEventListener("click", async function (ev) {
    let entry = input.value;
    if (entry.length > 0) {
        input.value = '';
        suggestionsList.style.display = 'none';
        divsuggestionsList.style.display = 'none';
        searchContainer.style.display = 'none';
        searchButton.style.backgroundImage = "url('./img/icon-search.svg')";
        
        searchBarIcon.style.visibility = 'hidden';
        noResultsContainer.style.display = 'none';
        count = 0;
      }  
});

trendContainer.addEventListener("click", async function (ev) {
    if (ev.target.tagName === "SPAN") {
        texto = ev.target.textContent;
        input.value = texto;
        count = 0;
        displayGifos(texto, count);
        searchBarIcon.style.visibility = 'hidden';
        searchButton.style.backgroundImage = "url('./img/close.svg')";
    }
})

button.addEventListener("click", async function () {
    count+=12;
    const searchResults = await search(texto,count);
    gifosGallery(searchResults);
})


// blob
// Agregar btn ver más cuando no hay más resultados
// Arreglar cuadricula cuando no hay tantos resultados