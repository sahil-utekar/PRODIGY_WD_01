let navBar = document.getElementById("navbar")

let ogPosition = navBar.offsetTop;

function changeColor() {

    if (window.scrollY >= ogPosition ) {
        navBar.style.backgroundColor = "#3f4248"
    }
    else {
        navBar.style.backgroundColor = "#191E29"
    }
}

window.onscroll = function() {
  changeColor();
};
