"strict";

const navList = document.querySelector(".nav__list");
const hidden = document.querySelector(".hidden");
const menu = document.querySelector(".icon--menu");
const logo = document.querySelector(".logo");
const navbar = document.querySelector(".navbar");
const listItem = document.querySelector(".list__item");

logo.addEventListener("click", function() {
    hidden.classList.add("hidden");
    menu.style.opacity = ".7";
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        if (!navList.classList.contains("hidden")) {
            hidden.classList.add("hidden");
            menu.style.opacity = ".7";
            listItem.style.transition = ".4s";
        }
    }
});
menu.addEventListener("click", function() {
    hidden.classList.toggle("hidden");
    if (navList.classList.contains("hidden")) {
        menu.style.opacity = ".7";
        listItem.transition = "margin .4s";
    } else if (!navList.classList.contains("hidden")) {
        menu.style.opacity = "1";
        listItem.style.transition = "margin .4s";
    }
});