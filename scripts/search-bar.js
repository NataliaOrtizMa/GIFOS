window.onscroll = function() {stickyFunction()};

var searchbar = document.getElementById("search-bar");
var headerbar = document.getElementById("header");
var mainbar = document.getElementById("main");

var stickySearchBar = searchbar.offsetTop;
var stickyHeaderBar = 10;   

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
