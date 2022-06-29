const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');
const btns = document.querySelectorAll('.button');
const default_btn = document.querySelector('#Default');
const stopwatch_btn = document.querySelector('#Stopwatch');
const Default = document.querySelector('.clock-container');
const Stopwatch = document.querySelector('.stop-watch');
const Timer = document.querySelector('.timer');
const timer_btn = document.querySelector("#Timer");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];



default_btn.addEventListener('click', () => {
    Stopwatch.style.transform = "translateX(500%)";
    

    Timer.style.transform = "translateX(1000%)";

    
    // Timer.classList.remove('active');
    Default.style.transform = "translateX(0%)";    
    
})

stopwatch_btn.addEventListener('click', () => {
    Default.style.transform = "translateX(-500%)";
    // Default.classList.remove('active');

    Timer.style.transform = "translateX(500%)";
    

    // Timer.classList.remove('active');
    Stopwatch.style.transform = "translateX(0%)";    
})

timer_btn.addEventListener('click', () => {
    Stopwatch.style.transform = "translateX(-500%)";

    Default.style.transform = "translateX(-1000%)";


    Timer.style.transform = "translateX(0%)";
})



toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if(html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerHTML = 'Dark mode';
    } else {
        html.classList.add('dark');
        e.target.innerHTML = 'Light mode'; //toggle.innerHTML = 'Light mode';
    }
})

btns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const html = document.querySelector('html');
        html.classList.add('dark');
        console.log('click');
    })
})


function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}`: minutes} ${ampm}`;
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;

}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime();

setInterval(setTime, 1000);


// Convert time to a format of hours, minutes, seconds, and milliseconds

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
  
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);
  
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
  
    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);
  
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");
  
    return `${formattedMM}:${formattedSS}:${formattedMS}`;
}
  
// Declare variables to use in our functions below

let startTime;
let elapsedTime = 0;
let timerInterval;

// Create function to modify innerHTML
  
function print(txt) {
    document.getElementById("display").innerHTML = txt;
}
  
  // Create "start", "pause" and "reset" functions
  
function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
      elapsedTime = Date.now() - startTime;
      print(timeToString(elapsedTime));
    }, 10);
    showButton("PAUSE");
}
  
function pause() {
    clearInterval(timerInterval);
    showButton("PLAY");
}
  
function reset() {
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
    showButton("PLAY");
}

function showButton(buttonKey) {
    const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
    const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";
}
// Create event listeners

let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let resetButton = document.getElementById("resetButton");
const display = document.getElementById("display");

playButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);

const hourText = document.getElementById("hourText");
const hour = document.getElementById("hour");
const minuteText = document.getElementById("minuteText");
const minute = document.getElementById("minute");
const secondText = document.getElementById("secondText");
const second = document.getElementById("second");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener('click', () => {
    var a = hour.value.replace(/\s/g, "");
    let aInt = parseInt(a);

    if(a > 99) {
        alert("Hour cannot greater than 99")
    } else if(a < 0) {
        alert("Hour cannot smaller than 0");
    } else if(a.includes(".")) {
        alert("Invalid input");
    } else if(isNaN(a) == true) {
        alert("Invalid input");
        hourText.innerHTML = "00";
    } else if(a == "" || parseInt(a) == 0) {
        hourText.innerHTML = "00";
    } else {
        (a < 10)?hourText.innerHTML = "0" + aInt:hourText.innerHTML = aInt;

    }

    var b = minute.value.replace(/\s/g, "");
    let bInt = parseInt(b);
    if(b > 59) {
        alert("Minute cannot greater than 59")
    } else if(b < 0) {
        alert("Minute cannot smaller than 0");
    } else if(b.includes(".")) {
        alert("Invalid input");
    } else if(isNaN(b) == true) {
        alert("Invalid input");
        minuteText.innerHTML = "00";
    } else if(b == "" || parseInt(b) == 0) {
        minuteText.innerHTML = "00";
    } else {
        (b < 10)?minuteText.innerHTML = "0" + bInt:minuteText.innerHTML = bInt;
    }
    

    var c = second.value.replace(/\s/g, "");
    let cInt = parseInt(c);
    if(c > 59) {
        alert("Second cannot greater than 99")
    } else if(c < 0) {
        alert("Second cannot smaller than 0");
    } else if(c.includes(".")) {
        alert("Invalid input");
    } else if(isNaN(c) == true) {
        alert("Invalid input");
        secondText.innerHTML = "00";
    } else if(c == "" || parseInt(c) == 0) {
        secondText.innerHTML = "00";
    } else {
        (c < 10)?secondText.innerHTML = "0" + cInt:secondText.innerHTML = cInt;
    }
    
    if(hourText.innerHTML !== "00" || minuteText.innerHTML !== "00" || secondText.innerHTML !== "00") {
        let minuteTurn = false;
        let hourTurn = false;
        const myInterval = setInterval(function(){
            if(secondText.innerHTML !== "00") {
                secondText.innerHTML = secondText.innerHTML - 1;
                (secondText.innerHTML < 10)?secondText.innerHTML = "0" + secondText.innerHTML:true;
            }
            if(secondText.innerHTML === "00" && minuteText.innerHTML === "00" && hourText.innerHTML === "00") {
                clearInterval(myInterval);
                return;
            }
            if(secondText.innerHTML === "00") {
                secondText.innerHTML = "59";
                minuteTurn = true;
            }
            
            if(minuteTurn) {
                if(minuteText.innerHTML !== "00") {
                    minuteText.innerHTML = minuteText.innerHTML - 1;
                    (minuteText.innerHTML < 10)?minuteText.innerHTML = "0" + minuteText.innerHTML:true;
                }
                if(minuteText.innerHTML === "00" && hourText.innerHTML !== "00") {
                    minuteText.innerHTML = "59"; 
                    hourTurn = true;   
                }
                minuteTurn = false;
            }
            if(hourTurn && hourText.innerHTML !== "00") {
                if(hourText.innerHTML !== "00") {
                    hourText.innerHTML = hourText.innerHTML - 1;
                    (hourText.innerHTML < 10)?hourText.innerHTML = "0" + hourText.innerHTML:true;
                }
                hourTurn = false;
            }
        }, 1000)
    }


})



