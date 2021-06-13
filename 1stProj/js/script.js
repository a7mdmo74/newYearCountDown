const daysEl = document.querySelector('#days');
const hoursEl = document.querySelector('#hours');
const minsEl = document.querySelector('#mins');
const secEl = document.querySelector('#sec');
const newYear = new Date('1 Jan 2022');

function countDown() {
    const newYearsDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = formatTime(minutes);;
    secEl.innerHTML = formatTime(seconds);
}
let formatTime = (time) => {
    return time < 10 ? (`0${time}`) : time;
}

// init countDown()
countDown();
setInterval(countDown, 1000);