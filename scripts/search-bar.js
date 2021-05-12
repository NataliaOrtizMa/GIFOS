window.onscroll = function() {stickyFunction()};

const searchbar = document.getElementById("search-bar");
const headerbar = document.getElementById("header");
const mainbar = document.getElementById("main");

const stickySearchBar = searchbar.offsetTop;
const stickyHeaderBar = 10;   

function stickyFunction() {
    if (window.pageYOffset >= stickySearchBar) {
        searchbar.classList.add("sticky");
    } else {
        searchbar.classList.remove("sticky");
    }
    if (window.pageYOffset >= stickyHeaderBar) {
        headerbar.classList.add("sticky-header");
    } else {
        headerbar.classList.remove("sticky-header");
    }
}
