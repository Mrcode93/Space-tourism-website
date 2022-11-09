let menu = document.querySelector(".menu");
let icon = document.querySelector(".menu img");
let nav = document.querySelector("header nav");

menu.addEventListener("click", () => {
    nav.classList.add("show");
    // if (nav.classList.contains("show")) {
    //     icon.src = "../starter-code/assets/shared/icon-close.svg";
    // } else {
    //     icon.src = "../starter-code/assets/shared/icon-hamburger.svg";
    // }
    console.log(nav);
});

let loader = document.querySelector(".load");

window.onload = () => {
    loader.style.display = "none";
};