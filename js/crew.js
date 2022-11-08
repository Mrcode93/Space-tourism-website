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
const role = document.querySelector(".role h3");
const person = document.querySelector(".description span");
const description = document.querySelector(".description p");
const img = document.querySelector(".right img");

let fetchData = function(target) {
    fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
            const information = data.crew;
            information.forEach((crew) => {
                // console.log(destination);
                if (target === crew.name) {
                    img.src = crew.images.png;
                    person.textContent = crew.name;
                    description.textContent = crew.bio;
                    role.textContent = crew.role;
                }
            });
        });
};

let dots = document.querySelectorAll(".dot");

let targetName = function() {
    dots.forEach((ele) => {
        // console.log(ele);
        ele.addEventListener("click", (e) => {
            dots.forEach((x) => {
                x.classList.remove("active");
            });
            ele.classList.add("active");
            const target = e.target.id;

            fetchData(target);
        });
    });
};
targetName();

let loader = document.querySelector(".loader");

window.onload = () => {
    loader.style.display = "none";
};