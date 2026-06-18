function todoList() {
    var editIdx = null; // for Edit
    let form = document.querySelector(".addTask form");
    let task = document.querySelector(".addTask form .input");
    let taskDetail = document.querySelector(".addTask form textarea");
    let taskCheck = document.querySelector(".addTask form #check");

    var currentTask = []

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (editIdx == null) {
            currentTask.push(
                {
                    task: task.value,
                    details: taskDetail.value,
                    imp: taskCheck.checked,
                    completed: false
                }
            )
        } else {
            currentTask[editIdx] = {
                task: task.value,
                details: taskDetail.value,
                imp: taskCheck.checked,
                completed: currentTask[editIdx].completed
            }
            editIdx = null;
        }

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
            <button class="mark-btn ${tasks.completed}" id=${idx}><img src="assets/checkbox-icon.svg" alt="check"></button>
            <h5 class="${tasks.completed}">${tasks.task}<span class="${tasks.imp}">imp</span></h5>
            <button class="view-btn" id=${idx}><img src="assets/details-icon.svg" alt="view"></button>
            <button class="edit-btn" id=${idx}><img src="assets/edit-icon.svg" alt="edit"></button>
            <button class="delete-btn" id=${idx}><img src="assets/delete-icon.svg" alt="delete"></button>
            </div>`
        })

        allTask.innerHTML = sum;

        // for Edit Details...

        let allEditBtn = document.querySelectorAll(".edit-btn");

        allEditBtn.forEach((editBtn) => {
            editBtn.addEventListener("click", () => {

                editIdx = editBtn.id;

                task.value = currentTask[editBtn.id].task
                taskDetail.value = currentTask[editBtn.id].details
                taskCheck.checked = currentTask[editBtn.id].imp

            })
        })

        // for View Details
        let lodoDetailsPage = document.querySelector(".todo-details-section");

        document.querySelectorAll(".view-btn").forEach((details) => {
            details.addEventListener("click", () => {
                lodoDetailsPage.style.display = "block";
                lodoDetailsPage.innerHTML = `<div class="todo-details-card">
                                                <h2>Details</h2>
                                                <button class="details-close">✕</button>
                                                <h3 class="details-title">${currentTask[details.id].task}</h3>
                                                <p class="details-text">${currentTask[details.id].details}</p>
                                            </div>`
                // for closing details
                let detailsClose = document.querySelector(".details-close");
                detailsClose.addEventListener("click", () => {
                    lodoDetailsPage.style.display = "none";

                })
            })
        })

        // Check/Mark btn
        let allCheckBtn = document.querySelectorAll("button.mark-btn");

        allCheckBtn.forEach((checkBtn) => {
            checkBtn.addEventListener("click", () => {
                currentTask[checkBtn.id].completed =
                    !currentTask[checkBtn.id].completed;

                renderTask()
            })
        })

        // for Delete tasks
        document.querySelectorAll(".task .delete-btn").forEach((btn) => {
            btn.addEventListener("click", () => {
                currentTask.splice(btn.id, 1);

                task.value = ''
                taskDetail.value = ''
                taskCheck.checked = false
                renderTask()
            })
        })
    }

    renderTask()
}

export default todoList;