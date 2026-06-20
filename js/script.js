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
    var cardPageBackBtn = document.querySelectorAll(".close-btn")

    cards.forEach(function (card) {
        card.addEventListener("click", function () {
            cardPage[card.id].style.display = "block";
        })
    })

    cardPageBackBtn.forEach(function (backBtn) {
        backBtn.addEventListener("click", function () {
            cardPage[backBtn.id].style.display = "none";
        })
    })
}

openFeatures()