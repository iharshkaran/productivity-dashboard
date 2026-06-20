function pomodoroTimer() {
    let timer = document.querySelector(".pomodoro-timer h1");
    let startBtn = document.querySelector("button.start-btn");
    let stopBtn = document.querySelector("button.stop-btn");
    let resetBtn = document.querySelector("button.reset-btn");
    
    // for styling
    let timerContainer = document.querySelector(".pomodoro-container")
    let sessionType = document.querySelector(".sessionType")
    let dot = document.querySelector(".dot")
    let sessionTypeTilte = document.querySelector(".sessionTypeTilte")

    let totalSeconds = 25 * 60;
    let timerInterval = null;
    let focusSession = true;


    let updatetimer = () => {
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        timer.innerHTML = `${minutes.toString().padStart(2, 0)} : ${seconds.toString().padStart(2, 0)}`
    }


    function startTimer() {
        clearInterval(timerInterval);

        if (focusSession) {

            timerInterval = setInterval(() => {
                if (totalSeconds > 0) {
                    totalSeconds--;
                } else {
                    focusSession = false;

                    sessionTypeTilte.innerHTML = "Break Session";
                    timerContainer.classList.add("false");
                    sessionType.classList.add("false");
                    dot.classList.add("false");
                    sessionTypeTilte.classList.add("false");

                    resetTimer();
                }
                updatetimer();
            }, 1000);
            
        } else {
            
            timerInterval = setInterval(() => {

                if (totalSeconds > 0) {
                    totalSeconds--;
                } else {
                    focusSession = true;

                    sessionTypeTilte.innerHTML = "Focus Session";
                    timerContainer.classList.remove("false");
                    sessionType.classList.remove("false");
                    dot.classList.remove("false");
                    sessionTypeTilte.classList.remove("false");
                    
                    resetTimer();
                }
                updatetimer();
            }, 1000);

        }
    }

    function stopTimer() {
        clearInterval(timerInterval);
    }

    function resetTimer() {

        clearInterval(timerInterval);
        if (focusSession) {
            totalSeconds = 25 * 60;
        } else {
            totalSeconds = 5 * 60;
        } 
        updatetimer();
    }

    startBtn.addEventListener("click", startTimer);
    stopBtn.addEventListener("click", stopTimer);
    resetBtn.addEventListener("click", resetTimer);
}

export default pomodoroTimer;