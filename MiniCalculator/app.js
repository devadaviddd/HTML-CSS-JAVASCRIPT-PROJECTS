let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");

let add = document.querySelector("#add");
let minus = document.querySelector("#minus");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");

let result = document.querySelector("#result");

function AddTwoNumbers(a, b) {
    let sum = a + b;
    return sum;    
}

function MinusTwoNumbers(a, b) {
    let diff = a - b;
    return diff;
}

function MultiplyTwoNumbers(a, b) {
    let product = a * b;
    return product;
}

function DivideTwoNumbers(a, b) {
    let quotien = a / b;
    return quotien;
}

result.innerHTML = DivideTwoNumbers(5, 10);

add.addEventListener("click", function(){

    //In string format
    num1.value;
    num2.value;

    //Convert to String to Number
    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value); 

    result.innerHTML = AddTwoNumbers(num_1, num_2);
})

minus.addEventListener("click", function(){

    //In string format
    num1.value;
    num2.value;

    //Convert to String to Number
    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value); 

    result.innerHTML = MinusTwoNumbers(num_1, num_2);
})

multiply.addEventListener("click", function(){

    //In string format
    num1.value;
    num2.value;

    //Convert to String to Number
    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value); 

    result.innerHTML = MultiplyTwoNumbers(num_1, num_2);
})

divide.addEventListener("click", function(){

    //In string format
    num1.value;
    num2.value;

    //Convert to String to Number
    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value); 

    result.innerHTML = DivideTwoNumbers(num_1, num_2);
})


