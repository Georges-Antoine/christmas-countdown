const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const christmas = '25 dec 2021'

function countdown() {
    const christmasDate = new Date(christmas);
    const currentDate = new Date();

    const totalSeconds = (christmasDate-currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const secs = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTimer(hours);
    minsEl.innerHTML = formatTimer(mins);
    secondsEl.innerHTML = formatTimer(secs);
}

function formatTimer(time) {
    return time < 10 ? (`0${time}`) : time;
}

setInterval(countdown, 1000);
