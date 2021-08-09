const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const newYears = "1 Jan 2022";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalseconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const minutes = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds % 60);

    if (hours < 10) {
        hoursEl.textContent = "0" + hours;
    } else {
        hoursEl.textContent = hours;
    }

    if (minutes < 10) {
        minutesEl.textContent = "0" + minutes;
    } else {
        minutesEl.textContent = minutes;
    }

    if (seconds < 10) {
        secondsEl.textContent = "0" + seconds;
    } else {
        secondsEl.textContent = seconds;
    }

    daysEl.textContent = days;
}

setInterval(countdown, 1000);
countdown();
