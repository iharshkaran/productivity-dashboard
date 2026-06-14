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

let form = document.querySelector(".addTask form");
let task = document.querySelector(".addTask form .input");
let taskDetail = document.querySelector(".addTask form textarea");
let taskCheck = document.querySelector(".addTask form #check");

let inputTask = {}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    currentTask.push(
        {
            task: `${task.value}`,
            details: `${taskDetail.value}`,
            imp: taskCheck.checked
        }
    )

    task.value = ''
    taskDetail.value = ''
    taskCheck.checked = false

    renderTask()
})

var currentTask = [
    {
        task: "GYM Jao",
        details: "Body Strong karnee ka lya",
        imp: true
    },
    {
        task: "Skill Sikho",
        details: "Money Earn karnee ka lya",
        imp: true
    },
]

let allTask = document.querySelector(".allTask")
function renderTask() {
    var sum = ''

    currentTask.forEach(function (tasks) {
        sum += `<div class="task">
              <h5>${tasks.task}<span class="${tasks.imp}">imp</span></h5>
              <button>Mark as Completed</button>
            </div>`
    })

    allTask.innerHTML = sum;
}

renderTask()