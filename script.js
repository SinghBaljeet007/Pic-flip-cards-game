const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');





const target = "22 Aug 2021";

function countdown() {
    const targetDate = new Date(target);
    const currentDate = new Date();

    const totaltime = (targetDate-currentDate) / 1000;

    const days = Math.floor(totaltime / 3600 / 24);
    const hours = Math.floor(totaltime / 3600) % 24;
    const mins = Math.floor(totaltime / 60) % 60;
    const seconds = Math.floor(totaltime) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

    // console.log(days, hours, mins, seconds);
    // console.log(targetDate-currentDate);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

//initial call
countdown();

setInterval(countdown, 1000);