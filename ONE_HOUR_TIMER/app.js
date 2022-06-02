let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let startBtn = document.querySelector("#startBtn");
let stopBtn = document.querySelector("#stopBtn");
let resetBtn = document.querySelector("#resetBtn");

let myTimer;
let myCounter = 0;
let mySeconds = 0;
let myMinutes = 0; 


startBtn.addEventListener("click", function(){
    startBtn.disabled = true;
    myTimer = setInterval(function(){
        myCounter++;
        mySeconds = myCounter;


        //Start Counting Seconds
        if(mySeconds > 59) {
            seconds.innerHTML = "00";
            myCounter = 0;
            myMinutes++;

        }else if(mySeconds > 9) {
            seconds.innerHTML = mySeconds; 
            minutes.innerHTML = myMinutes;
        } else {
            seconds.innerHTML = "0" + mySeconds;
        }

        //Start Counting Minutes
        if(myMinutes > 59) {
            seconds.innerHTML = "00";
            myCounter = 0;
            minutes.innerHTML = "00";
            myMinutes = 0;
            mySeconds = 0;
            clearInterval(myTimer);

        }
        if(myMinutes > 9) {
            minutes.innerHTML = myMinutes;
        } else {
            minutes.innerHTML = "0" + myMinutes;
        }
    }, 1000)
})

stopBtn.addEventListener("click", function(){
    clearInterval(myTimer);
    startBtn.disabled = false;
})

resetBtn.addEventListener("click", function(){
    clearInterval(myTimer);
    startBtn.disabled = false;
    seconds.innerHTML = "00";
    minutes.innerHTML = "00";
    myCounter = 0;
    myMinutes = 0;
    mySeconds = 0;
})




