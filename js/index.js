var carouselTrack = document.getElementsByClassName("blog-carousel-track")[0];
var carouselButtonBlock = document.getElementsByClassName("blog-carousel-buttons")[0];
var xCarousel = 30;
var roomItem = 0;
var carouselItem = document.getElementsByClassName("blog-item");
var widthItem = carouselItem[0].width;
function addButtonCarousel() {
    carouselButtonBlock.innerHTML += '<button onclick="toogleClassButton(0)" class="blog-btn active"></button>';
    for (var i = 1; i < carouselItem.length - 2; i++) {
        carouselButtonBlock.innerHTML += '<button onclick="toogleClassButton(' + i + ')" class="blog-btn"></button>';
    }
}
addButtonCarousel();
var carouselButton = document.getElementsByClassName("blog-btn");
function toogleClassButton(room) {
    xCarousel = 30 - (widthItem + 32) * room;
    roomItem = room;
    carouselButton[room].classList.add("active");
    carouselTrack.style.left = xCarousel + "px";
    for (var i = 0; i < carouselButton.length; i++) {
        if (room != i) {
            carouselButton[i].classList.remove("active");
        }
    }
}
setInterval(function () {
    if (roomItem < carouselItem.length - 3) {
        xCarousel -= widthItem + 32;
        roomItem++;
        carouselButton[roomItem].classList.add("active");
        carouselButton[roomItem - 1].classList.remove("active");
    }
    else {
        carouselButton[0].classList.add("active");
        carouselButton[roomItem].classList.remove("active");
        xCarousel = 30;
        roomItem = 0;
    }
    carouselTrack.style.left = xCarousel + "px";
}, 3000);
function isPartiallyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();
    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;
    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}
