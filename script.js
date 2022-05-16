"strict";

const navList = document.querySelector(".nav__list");
const hidden = document.querySelector(".hidden");
const menu = document.querySelector(".icon--menu");
const logo = document.querySelector(".logo");
const navbar = document.querySelector(".navbar");

logo.addEventListener("click", function() {
    hidden.classList.add("hidden");
    menu.style.opacity = ".7";
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        if (!navList.classList.contains("hidden")) {
            hidden.classList.add("hidden");
            menu.style.opacity = ".7";
        }
    }
});
menu.addEventListener("click", function() {
    hidden.classList.toggle("hidden");
    if (navList.classList.contains("hidden")) {
        menu.style.opacity = ".7";
    } else if (!navList.classList.contains("hidden")) {
        menu.style.opacity = "1";
    }
});