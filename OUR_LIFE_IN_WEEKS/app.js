let ageInput = document.querySelector("#ageInput");
let calcBtn = document.querySelector("#calcBtn");
let result = document.querySelector("#result");
let displayResult = document.querySelector("#displayResult");
let resetBtn = document.querySelector("#resetBtn");
let refresh = document.querySelector(".refresh");

let mytimer;
let age;

function separateNumbersInComma(remaining_weeks){
    return remaining_weeks.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



calcBtn.addEventListener('click', function(){
    age = ageInput.value.trim();

    clearInterval(mytimer);
    if(age == "") {
        let alert = document.querySelector(".alert");
        alert.classList.add("active");

        // Display the innerhtml of class alert in three 3second then dissappear
        mytimer = setInterval(function(){
            alert.classList.remove("active");
        }, 2000)
    } else if(isNaN(age) == true){ //If age is not a number
        let alert2 = document.querySelector(".alert2");
        alert2.classList.add("active");

        mytimer = setInterval(function(){
            alert2.classList.remove("active");
        }, 2000)
    } else {
        let answer = document.querySelector(".answer");
        answer.classList.add('active');

        let remaining_years = 90 - age;
        let remaining_weeks = remaining_years * 52;
        
        result.innerHTML = separateNumbersInComma(remaining_weeks);
    
        //clear out the text in the input box
        ageInput.value = "";
    }  
})

resetBtn.addEventListener('click', function(){
    refresh.click();
})


