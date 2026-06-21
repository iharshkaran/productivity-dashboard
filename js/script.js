import daysTime from "./daysTime.js";
import weather from "./weather.js";
import todoList from "./todoList.js";
import pomodoroTimer from "./pomodoro.js";
import dailyPlanner from "./dailyPlanner.js";
import motivationalQuote from "./motivation.js";

daysTime();
weather();
todoList();
pomodoroTimer();
dailyPlanner();
motivationalQuote();

function openFeatures() {
    var cards = document.querySelectorAll(".card");
    var cardPage = document.querySelectorAll(".cardPage");
    var cardPageBackBtn = document.querySelectorAll(".close-btn");
    var allCards = document.querySelector("section.allCards");

    cards.forEach(function (card) {
        card.addEventListener("click", function () {
            cardPage[card.id].style.display = "block";
            allCards.style.display = "none";
        })
    })

    cardPageBackBtn.forEach(function (backBtn) {
        backBtn.addEventListener("click", function () {
            cardPage[backBtn.id].style.display = "none";
            allCards.style.display = "grid";
        })
    })
}

openFeatures()

function themeChange() {
    const circle2 = document.querySelector(".circle2");
    const rootElement = document.documentElement;

    let darkMode = true;

    circle2.addEventListener("click", () => {

        if (darkMode) {
            rootElement.style.setProperty("--blackBG", "white");
            rootElement.style.setProperty("--black", "white");
            rootElement.style.setProperty("--white99", "black");
            darkMode = false;
        } else {
            rootElement.style.setProperty("--blackBG", "black");
            rootElement.style.setProperty("--black", "black");
            rootElement.style.setProperty("--white99", "white");
            darkMode = true;
        }

    });
}

themeChange();