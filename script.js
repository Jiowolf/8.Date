
let now = new Date(); // current date and time


// console.log(`Brussels : ${now.toLocaleString("fr-BE", {timeZone: "Europe/Brussels"})}`);
// console.log(`Reykjavik : ${now.toLocaleString("is-IS", {timeZone: "Atlantic/Reykjavik"})}`);
// console.log(`Anchorage : ${now.toLocaleString("en-US", {timeZone: "America/Anchorage"})}`);
// console.log(`Moscow : ${now.toLocaleString("ru-RU", {timeZone: "Europe/Moscow"})}`);


// function getDays (d){
//     let date = new Date(d).getTime();
//     let now = new Date().getTime();
//     let diff = now - date;
//     return Math.floor(diff / (1000 * 60 * 60 * 24));
// }

// console.log(getDays("1997-12-09"));

function plusXHours (x){
    let date = now.getTime();
    let milisecondX = x*60*60*1000;

    let newD = date + milisecondX;
    newDate = new Date(newD); 
    return newDate.toLocaleString("fr-BE", {timeZone: "Europe/Brussels"});
}


let INPUT__SELECT = document.querySelector("input");
let SUBMIT__SELECT = document.querySelector("#newCheck")

SUBMIT__SELECT.addEventListener("click",() => {
    let p = document.querySelector("p");
    let inputValue = INPUT__SELECT.value;
    p.innerHTML = plusXHours(inputValue);
})

let date = "";
let month = "";

switch (now.getDay()) {
    case 0:
        date = "Sun";
        break;
    case 1:
        date = "Mon";
        break;
    case 2:
        date = "Tue";
        break;
    case 3:
        date = "Wed";
        break;
    case 4:
        date = "Thu";
        break;
    case 5:
        date = "Fri";
        break;
    case 6:
        date = "Sat";
        break;
    //default ?
}

switch (now.getMonth()) {
    case 0:
        month = "Jan";
        break;
    case 1:
        month = "Feb";
        break;
    case 2:
        month = "Mar";
        break;
    case 3:
        month = "Apr";
        break;
    case 4:
        month = "May";
        break;
    case 5:
        month = "Jun";
        break;
    case 6:
        month = "Jul";
        break;
    case 7:
        month = "Aug";
        break;
    case 8:
        month = "Sep";
        break;
    case 9:
        month = "Oct";
        break;
    case 10:
        month = "Nov";
        break;
    case 11:
        month = "Dec";
        break;
    //default ?
}// amélioration possible avec un tableau

let year = now.getFullYear();

let day = now.getDate();

let clockSelect = document.querySelector("#clock");
let daySelect = document.querySelector("#day");
let monthDaySelect = document.querySelector("#monthDay");
let yearSelect = document.querySelector("#year");

daySelect.innerHTML = date;
monthDaySelect.innerHTML = `${day} <br> ${month}`;
yearSelect.innerHTML = year;
clockSelect.innerHTML = now.toLocaleTimeString("fr-BE", {timeZone: "Europe/Brussels"});

let format = `fr-BE`

clockSelect.addEventListener("click", () => {
    if(clockSelect.innerHTML === now.toLocaleTimeString("fr-BE", {timeZone: "Europe/Brussels"})){
        format = `en-US`;
        clockSelect.innerHTML = now.toLocaleTimeString(`${format}`, {timeZone: "Europe/Brussels"});
    }else{
        format = `fr-BE`;
        clockSelect.innerHTML = now.toLocaleTimeString(`${format}`, {timeZone: "Europe/Brussels"});
    }
});

const Timer = setInterval(() => {
    now = new Date();
    clockSelect.innerHTML = now.toLocaleTimeString(`${format}`, {timeZone: "Europe/Brussels"});
}, 1000);