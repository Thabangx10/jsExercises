// How to create a function called fullName that returns your full name and displays it on the console

let name1 = 'Thabang Kganana'

function fullname(name1) {
    console.log(name1);
}

fullname(name1)


// Question 2

// Please create the following variables to store your information:
// firstName, lastName, age, list of subjects, and address, which will store the street
// name, street number, suburb, city, and country name.

let student = {
    firstname : 'Thabang',
    lastname : 'Kganana',
    Age : 24,
};

console.log(student.firstname, student.lastname, student.Age);


let subjects = ['JavaScript', 'HTML', 'CSS/BOOTSRTRAP']

console.log(subjects[0], subjects[1], subjects[2]);

let home = {
    Address : 'YMCA, springbok rd',
    streetNumber : 16,
    suburb : 'Kewtown',
    city : 'Athlone',
    country : 'South Africa'
}

console.log(home.Address, home.streetNumber, home.suburb, home.city, home.country);

// Calculator form

function calculate() {
    let number1 = parseInt(document.getElementById("number1").value);
    let number2 = parseInt(document.getElementById("number2").value);
    let operator = document.getElementById("operator").value;

    // create a logical calculation based on the selected operator

    let result;

    // if (operator) {
        
    // }

    // will use switch - case for our logic with breaks if an operator has been selected. I t wil also raise an Error if the operator chosen isnt one of the ones already provided.

    switch (operator) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "**":
            result = number1**number2;
            break;
        case "/":
            result = number1 / number2
            break;
        default:
            result = "Invalid operator chosen, Please select the available operators";
    }

    document.getElementById("result").textContent = "Result: " + result;
}

// We created a button to clear the inputed values and select a new equation more efficiently.

function clearForm() {
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    document.getElementById("operator").selectedIndex = 0;
    document.getElementById("result").textContent = "";
}