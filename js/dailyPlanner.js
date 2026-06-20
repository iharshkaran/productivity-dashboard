function dailyPlanner(){

    let hours = []

    for(let i=0; i<18; i++){
        if((i+6)>12){
            hours.push(`${((6+i)-12).toString().padStart(2,0)}:00 - ${((7+i)-12).toString().padStart(2,0)}:00`)
        }else if((i+6)===12 && (i+7)===13){
            hours.push(`${(6+i).toString().padStart(2,0)}:00 - ${((7+i)-12).toString().padStart(2,0)}:00`)
        } else {
            hours.push(`${(6+i).toString().padStart(2,0)}:00 - ${(6+(i+1)).toString().padStart(2,0)}:00`)
        }
    }
    
    let dailyPlanner = document.querySelector(".daily-planner");
    let dailyPlannerInputData =JSON.parse(localStorage.getItem("dailyPlannerInputData")) || []
    
    let wholeDaySum = ''
    
    hours.forEach((elem,idx)=>{

        let savedData = dailyPlannerInputData[idx] || ''
        
        wholeDaySum += `<div class="daily-planner-time">
        <div class="planner-time">
        <p>${elem}</p>
        </div>
        <div class="planner-task"><input id="${idx}" type="text" placeholder="..." value="${savedData}"></div>
        </div>`

    })
    
    dailyPlanner.innerHTML = wholeDaySum

    let dailyPlannerInput = document.querySelectorAll(".daily-planner input");
    dailyPlannerInput.forEach((inputPlanner,idx)=>{
        inputPlanner.addEventListener("input",()=>{
            dailyPlannerInputData[idx] = inputPlanner.value;
            localStorage.setItem("dailyPlannerInputData", JSON.stringify(dailyPlannerInputData))
        })    
    })

    
    
    
}
export default dailyPlanner;