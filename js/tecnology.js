let menu = document.querySelector(".menu");
let icon = document.querySelector(".menu img");
let nav = document.querySelector("nav");

menu.addEventListener("click", () => {
    nav.classList.toggle("show");
    if (nav.classList.contains("show")) {
        icon.src = "../starter-code/assets/shared/icon-close.svg";
    } else {
        icon.src = "../starter-code/assets/shared/icon-hamburger.svg";
    }
});

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
let loader = document.querySelector(".loader");

window.onload = () => {
    loader.style.display = "none";
};