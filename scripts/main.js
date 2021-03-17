const apiKey = "9P4km8pnyUnE8G052TCp83ChV6qMyjLw";

let input = document.querySelector("#search-bar__input").value;
console.log(input);

async function autocomplete(){
    const elFetch = await fetch(`https://api.giphy.com/v1/gifs/search/tags?q=masc&api_key=${apiKey}`);
    laData = await elFetch.json();
    console.log(laData);
}
async function search(){
    const elFetch = await fetch(`https://api.giphy.com/v1/gifs/search?q=hola&api_key=${apiKey}`);
    laData = await elFetch.json();
    console.log(laData);
}
async function trending(){
    const elFetch = await fetch(`https://api.giphy.com/v1/trending/searches?&api_key=${apiKey}`);
    laData = await elFetch.json();
    console.log(laData);
}
async function searchSuggestions(){
    const elFetch = await fetch(`https://api.giphy.com/v1/gifs/trending?&api_key=${apiKey}`);
    laData = await elFetch.json();
    console.log(laData);
}
autocomplete();
search();
trending();
searchSuggestions();

// const apiKey = "VZ4N6ebz6BSdgrhUNiKAAU0dNYws5GSn";
// blob
// const apiKey = "0m6p9UIK0QqEfA8GmlLnGoKcW873s8Ld";
