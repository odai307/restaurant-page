import Home from "./home"
import Menu from "./menu.js";
import { displayAbout } from "./about.js";

import "./assets/styles/style.css";



const displayPage = (page) => {
    const content = document.querySelector(".content");
    content.innerHTML = "";
    content.appendChild(page);
}


const homePage = document.querySelector(".home-btn");
const menuPage = document.querySelector(".menu-btn");
const aboutPage = document.querySelector(".about-btn");


homePage.addEventListener("click", () => {
    displayPage(Home.displayDays());
})


menuPage.addEventListener("click", () => {
    const content = document.querySelector(".content");
    content.innerHTML = "";

    content.appendChild(Menu.displayCoffee());
    content.appendChild(Menu.displayBread());
    content.appendChild(Menu.displayFruitJuice());
});


aboutPage.addEventListener("click", () => {
    displayPage(displayAbout());
})


displayPage(Home.displayDays());

