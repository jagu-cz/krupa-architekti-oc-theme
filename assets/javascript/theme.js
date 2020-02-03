// When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
let prevScrollPos = window.pageYOffset;
window.onscroll = () => {
    // show/hide menu
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos < 50 || prevScrollPos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-120px";
    }
    // show/hide background
    if (currentScrollPos < 100) {
        document.getElementById("header").classList.remove("show-background");
    } else {
        document.getElementById("header").classList.add("show-background");
    }

    prevScrollPos = currentScrollPos;
};

// Full-height header image
$(function () {
    adjustHeaderImageHeight();
    $(window).resize(function () {
        adjustHeaderImageHeight();
    });
});

let adjustHeaderImageHeight = function () {
    let height = $(window).height();
    $(".header-image").height(height);
    $(".header-video").height(height);
    $(".video-container").height(height);
    $(".header-image-title").height(height);
};

// LightBox
lightbox.option({
    albumLabel: '%1/%2'
});