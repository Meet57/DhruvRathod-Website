mybutton = document.getElementById("js-top");
sideNav = document.getElementById("sideNav");
MobileNav = document.getElementById("MobileNav");
mybutton.classList.add("hidden")
scrolled = false;

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        if (!scrolled) {
            sideNav.classList.remove("hidden")
            mybutton.classList.remove("hidden")
            sideNav.classList.add("visible")
            mybutton.classList.add("visible")
        }
        scrolled = true
    } else {
        if (scrolled) {
            sideNav.classList.remove("visible")
            mybutton.classList.remove("visible")
            sideNav.classList.add("hidden")
            mybutton.classList.add("hidden")
        }
        scrolled = false
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// mobile nav

openNavigation = () => {
    MobileNav.classList.remove("swipeout")
    MobileNav.classList.add("swipein")
}

closeNav = () => {
    MobileNav.classList.remove("swipein")
    MobileNav.classList.add("swipeout")
}