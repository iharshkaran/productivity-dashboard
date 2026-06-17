import todoList from "./todoList.js";

todoList();

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