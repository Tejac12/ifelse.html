const score = 85;

const grade = (score >= 90) ? 'A' :
    (score >= 80) ? 'B' :
        (score >= 70) ? 'C' :
            (score >= 60) ? 'D' : 'F';

console.log(`your grade is:${grade}`)


//2

const age = 48;
const isAdult = (age >= 18) ? 'you are an adult.' : 'you are not an adult';
console.log(isAdult)


//You have a variable day that contains the name of a day (e.g., "Monday", "Tuesday", etc.). Write an if-else statement to determine if the day is a weekend. The weekend is defined as either Saturday or Sunday.

var day = "wednesday";

if (day === "saturday" || day === "sunday") {
    console.log(day + "is a weekend")
} else {
    console.log(day + "its not a  weekend")
}




//You have a variable age representing a person's age and a boolean variable citizenship indicating whether they are a citizen (true for citizen, false for non-citizen). Write an if-else statement to check if the person is eligible to vote. A person is eligible to vote if they are at least 18 years old and a citizen.

var personsage = 24;
var citizen = true;
var noncitzen = false;
if (personsage >= 18 & citizen) {
    console.log("person is eligible to vote")
} else {
    console.log("person is not eligible to vote")
}




//You have a simple login form where users enter their username and password. You want to check if the username is "admin" and the password is "12345". The username can be entered in any case (e.g., "Admin", "ADMIN", "admin"), while the password must be checked strictly.

let username = "Admin";
let password = "12345";
if (username.toLowerCase() === "admin" && password === "12345") {
    console.log("login successfull!")
} else {
    console.log("login faild...please check your username and password")
}