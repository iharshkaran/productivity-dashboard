function daysTime() {

    let currentDay = document.querySelector(".currentDay");
    let currentTime = document.querySelector(".currentTime");


    let now = new Date();

    const daysOfWeek = [
        "Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let day = daysOfWeek[now.getDay()];
    let date = now.getDate();
    let month = months[now.getMonth()];
    let year = now.getFullYear();

    currentDay.innerHTML = `${day}, ${date} ${month} ${year}`;
    if(hour > 12){
        currentTime.innerHTML = `${(hour-12).toString().padStart(2, 0)}:${minute.toString().padStart(2, 0)}:${second.toString().padStart(2, 0)}<span>PM</span>`;
    } else {
        currentTime.innerHTML = `${(hour).toString().padStart(2, 0)}:${minute.toString().padStart(2, 0)}:${second.toString().padStart(2, 0)}<span>PM</span>`;
    }
    
    setInterval(()=>{
        daysTime();
    },1000)
}

export default daysTime;