let input_firstname = document.querySelector("#firstname");
let input_lastname = document.querySelector("#Lastname");
let btn = document.querySelector("#submitBtn");
let tbody = document.querySelector("#tbody");

btn.addEventListener('click', function(){

    let firstname = input_firstname.value;
    let lastname = input_lastname.value;

    if(firstname.trim() == "" && lastname.trim() == "") {
        alert("Please enter first name and last name!");
    } else if(firstname.trim() == ""){
        alert("Please enter first name!");
    } else if(lastname.trim() == "") {
        alert("Please enter last name!");
    } else {
        let newFirst = document.createElement("td");
        newFirst.innerHTML = firstname;
        let newLast = document.createElement("td");
        newLast.innerHTML = lastname;

        let row = document.createElement("tr");
        row.appendChild(newFirst);
        row.appendChild(newLast);
        tbody.appendChild(row);

        input_firstname.value = "";
        input_lastname.value = "";
    }
});

