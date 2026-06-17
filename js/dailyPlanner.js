function dailyPlanner(){

    let hours = []

    for(let i=0; i<18; i++){
        hours.push(`${6+i}:00 - ${7+i}:00`)
    }

    let wholeDaySum = ''
    hours.forEach((elem)=>{
        wholeDaySum += `<div class="daily-planner-time">
                            <div class="planner-time">
                                <p>${elem}</p>
                            </div>
                            <div class="planner-task"><input type="text" placeholder="..."></div>
                        </div>`

    })

    let dailyPlanner = document.querySelector(".daily-planner");
    dailyPlanner.innerHTML = wholeDaySum
    
}
export default dailyPlanner;