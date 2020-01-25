/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollPos = window.pageYOffset;
window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos < 50 || prevScrollPos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-120px";
    }
    prevScrollPos = currentScrollPos;
};
