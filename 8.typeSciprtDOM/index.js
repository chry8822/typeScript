"use strict";
var title = document.querySelector('#title');
if (title != null) {
    title.innerHTML = "HelloWorld";
}
if (title instanceof Element) {
    title.innerHTML = "HelloWorld";
}
if ((title === null || title === void 0 ? void 0 : title.innerHTML) != undefined) {
    title.innerHTML = "HelloWorld";
}
var findLink = document.querySelector(".link");
if (findLink instanceof HTMLAnchorElement) {
    findLink.href = "https://kakao.com";
}
var img = document.querySelector("#img");
var btn = document.querySelector("#btn");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    if (img instanceof HTMLImageElement) {
        img.src = "./노트북.jpg";
    }
});
var allLink = document.querySelectorAll(".link");
allLink.forEach(function (link) {
    if (link instanceof HTMLAnchorElement) {
        link.href = "https://kakao.com";
    }
});
