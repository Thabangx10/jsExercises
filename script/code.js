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

// new execerise


// To return random characters in a string

let subject1 = "programming";
//  function called random which will take in the parameter of 'length'

function random(length) {
    
    // Set counter to an empty string 
    let result = '';

    // Create a variable to collect the elements within the strings length
    let subjectlength = subject1.length;

    // creating a range function to collect our values from the variable 'subject' and generate our desired output into 'result'
    for (let i = 0; i < length; i++) {
        result += subject1.charAt(Math.floor(Math.random() * subjectlength));
        
    }

    return result;
}
console.log(random(10));


// We are now going to implement logic that will allow us to reverse the the variable

let subject = "programming";

// lets create a function to implement our logic to solve the problem of reversing the string

function reverse(subject) {
    
    // Set counter to empty string
    let newsubject = "";

    // range function to collect elements within our value from the last value using . length -1

    for (let i = subject.length -1 ; i >= 0; i--){
        newsubject += subject[i];
    }
    return newsubject;
}

let result = reverse(subject);
console.log(result);

// Question 5

// Array of objects with people's names and dates of birth
let peeps = [
    { name: 'Thabang', birth: '1999-05-13' },
    {name: 'Kamogelo', birth: '1999-02-22'},
  ];
  
  // Function to calculate age and days until next birthday
  function ageANDdays(person) {
    let today = new Date();
    let birthDate = new Date(person.birth);
    let currentYear = today.getFullYear();
    let birthYear = birthDate.getFullYear();
    
    // Calculate age
    let age = currentYear - birthYear;
  
    if (today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() > birthDate.getDate())) {
      age; 
    }
  
    let nextBirthday = new Date(currentYear, birthDate.getMonth(), birthDate.getDate());
    
    let daysnuntil = Math.floor((nextBirthday - today) / (1000 * 60 * 60 * 24));
  
    // Display the person's age and days until next birthday
    console.log(`${person.name}'s age is ${age}, and there are ${daysnuntil} days left until their next birthday.`);
  }
  
  if (thabang = peeps.find(person => person.name === 'Thabang')) {
    ageANDdays(thabang);
  } else {
    console.log('thabang not found in the array.');
  }

// Question 6

// let marks = document.getElementById('#user').value;

// switch (marks) {
//     case "100%":
//         result = "You’re amazing";
//         break;
//     case "90-99":
//         result = "Well Done";
//         break;
//     case "80-89":
//         result = "Way to Go";
//         break;
//     case "75-79":
//         result = "Keep it Up";
//         break;
//     case "60-74":
//         result = "You did good";
//         break;
//     case "50-59":
//         result = "That was good";
//         break;
//     default:
//         result = "Invalid operator chosen, Please select the available operators";
// }

function users(marks) {
    switch (true) {
      case marks === 100:
        console.log("You're amazing");
        break;
      case marks >= 90 && marks <= 99:
        console.log("Well Done");
        break;
      case marks >= 80 && marks <= 89:
        console.log("Way to go");
        break;
      case marks >= 75 && marks <= 79:
        console.log("Keep it up");
        break;
      case marks >= 60 && marks <= 74:
        console.log("You did good");
        break;
      case marks >= 50 && marks <= 59:
        console.log("That was good");
        break;
      default:
        console.log("You failed");
    }
  }
  
  let mark = 85;
  users(mark);
  