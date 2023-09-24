let hamburger = <HTMLImageElement> document.querySelector("img.hamburger");
let menuMobile = <HTMLDivElement> document.querySelector(".mobile");


hamburger.addEventListener("click", function () {
    menuMobile.classList.toggle("show");
});