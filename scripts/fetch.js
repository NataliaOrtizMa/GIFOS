const url = "https://api.giphy.com/v1/";
// const apiKey = "9P4km8pnyUnE8G052TCp83ChV6qMyjLw";
const apiKey = "VZ4N6ebz6BSdgrhUNiKAAU0dNYws5GSn";
// const apiKey = "0m6p9UIK0QqEfA8GmlLnGoKcW873s8Ld";

async function autocomplete(input){
    try {
        const elFetch = await fetch(`${url}gifs/search/tags?q=${input}&api_key=${apiKey}`);
        data = await elFetch.json();
        return data;
    }
    catch(error) {
        console.log('Fetch autocomplete Error', error);
    };
}

async function search(input, offset){
    try {
        const elFetch = await fetch(`${url}gifs/search?q=${input}&api_key=${apiKey}&limit=12&offset=${offset}`);
        data = await elFetch.json();
        return data;
    }
    catch(error) {
        console.log('Fetch search Error', error);
    }
}

async function trendingTerms(){
    try {
        const response = await fetch(`${url}trending/searches?&api_key=${apiKey}`);
        data = await response.json();
        data = data.data.slice(0,5)
        return data;
    }
    catch(error) {
        console.log('Fetch trendingTerms Error', error);
    }; 
}

async function trendingGifs(){
    try {
        const response = await fetch(`${url}gifs/trending?&api_key=${apiKey}&limit=3`);
        data = await response.json();
        return data;
    }
    catch(error) {
        console.log('Fetch trendingGifs Error', error);
    };
}

(async function () {
    const gifsArray = await trendingGifs();
    const trendingGifsContainer = document.getElementById("images-container");
    
    for(var i=0; i<3; i++) {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add("carousel-item");
        carouselItem.id = "carousel-item";
        const imagen = document.createElement('img');
        imagen.classList.add("carousel-item__img");
        imagen.id = ("carousel-item__img");
        let Gif = {
            source: gifsArray.data[i].images.fixed_width_still.url,
            sourceQuality: gifsArray.data[i].images.fixed_width.webp,
            downloadUrl: gifsArray.data[i].images.original.url,
            gifUserName: gifsArray.data[i].username ? gifsArray.data[i].username : 'No Username',
            gifName: gifsArray.data[i].title ? gifsArray.data[i].title : 'No Title',
            gifId: gifsArray.data[i].id,
            // isFav: 0,
            
        };
        imagen.info = Gif;
        imagen.src = Gif.source;
        
        carouselItem.info = Gif;
        carouselItem.identifier = Gif.gifId;
        // carouselItem.isFav = 0;
        carouselItem.append(imagen);
        trendingGifsContainer.append(carouselItem);

        hoverItems(carouselItem, imagen.info.gifUserName, imagen.info.gifName);
    }
})();

(async function () {
    const trendsArray = await trendingTerms();
    const trendingTermsContainer = document.getElementById("trends-container");
    trendsArray.forEach(trend => {
        const trendingTerm = document.createElement('span');
        trendingTerm.appendChild(document.createTextNode(capitalize(trend)));
        trendingTermsContainer.append(trendingTerm);
    });
})();
