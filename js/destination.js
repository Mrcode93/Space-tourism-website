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
const li = document.querySelectorAll(".des-menu li");
const img = document.querySelector(".left img");
const itemName = document.querySelector(".name h1");
const description = document.querySelector(".description p");
const info = document.querySelectorAll(".bottom h3");

let fetchData = function(target) {
    fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
            const information = data.destinations;
            information.forEach((destination) => {
                // console.log(destination);
                if (target === destination.name) {
                    img.src = destination.images.png;
                    itemName.textContent = destination.name;
                    description.textContent = destination.description;
                    info[0].textContent = destination.distance;
                    info[1].textContent = destination.travel;
                }
            });
        });
};

let targetName = function() {
    li.forEach((ele) => {
        ele.addEventListener("click", (e) => {
            li.forEach((x) => {
                x.classList.remove("active");
            });
            ele.classList.add("active");
            const target = e.target.textContent;
            fetchData(target);
        });
    });
};
targetName();

let loader = document.querySelector(".load");

window.onload = () => {
    loader.style.display = "none";
};