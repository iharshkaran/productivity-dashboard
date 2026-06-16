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


function todoList() {
    let form = document.querySelector(".addTask form");
    let task = document.querySelector(".addTask form .input");
    let taskDetail = document.querySelector(".addTask form textarea");
    let taskCheck = document.querySelector(".addTask form #check");

    var currentTask = []

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        currentTask.push(
            {
                task: task.value,
                details: taskDetail.value,
                imp: taskCheck.checked
            }
        )

        task.value = ''
        taskDetail.value = ''
        taskCheck.checked = false

        renderTask()
    })


    if (localStorage.getItem("currentTask")) {
        currentTask = JSON.parse(localStorage.getItem("currentTask"));
    } else {
        console.log("LocalStorge is Emplty lol :) ");
    }


    function renderTask() {
        localStorage.setItem("currentTask", JSON.stringify(currentTask));
        let allTask = document.querySelector(".allTask")
        var sum = ''

        currentTask.forEach(function (tasks, idx) {
            sum += `<div class="task">
              <h5>${tasks.task}<span class="${tasks.imp}">imp</span></h5>
              <button class="view-btn" id=${idx}><img src="assets/delete-icon.svg" alt="delete"></button>
              <button class="delete-btn" id=${idx}><img src="assets/delete-icon.svg" alt="delete"></button>
            </div>`
        })

        allTask.innerHTML = sum;

        let lodoDetailsPage = document.querySelector(".todo-details-section");

        document.querySelectorAll(".view-btn").forEach((details)=>{
            console.log(details.id);
            details.addEventListener("click", ()=>{
                lodoDetailsPage.style.display = "Block";
            })
        })

        // for Delete tasks
        document.querySelectorAll(".task .delete-btn").forEach((btn) => {
            btn.addEventListener("click", () => {
                currentTask.splice(btn.id, 1);
                renderTask()
            })
        })
    }

    renderTask()
}

todoList()