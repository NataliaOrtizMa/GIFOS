window.onscroll = function() {stickyFunction()};

var searchbar = document.getElementById("search-bar");

var sticky = searchbar.offsetTop;

function stickyFunction() {
    if (window.pageYOffset >= sticky) {
        searchbar.classList.add("sticky");
    } else {
        searchbar.classList.remove("sticky");
    }
}