
const degree = 6;
const hour = document.querySelector("#hr");
const minute = document.querySelector("#mn");
const second = document.querySelector("#sc");



function startclock() {

    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * degree;
    let ss = day.getSeconds() * degree;


    hour.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    minute.style.transform = `rotateZ(${mm}deg)`;
    second.style.transform = `rotateZ(${ss}deg)`;
}


setInterval(() => {
    startclock();
}, 1000);
