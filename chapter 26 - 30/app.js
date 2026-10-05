// Q1. Write a program that takes a positive integer from
// user and displays:
// a. number
// b. round off value
// c. floor value
// d. ceil value

var num = prompt("Enter your number")
if (num > 0) {
    document.write("Number: " + num + "<br>");
    document.write("Round off value: " + Math.round(num) + "<br>");
    document.write("Floor value: " + Math.floor(num) + "<br>");
    document.write("Ceil value: " + Math.ceil(num) + "<br>");
}else {
    document.write("Please enter a positive number.");
}

// Q2. Write a program that takes a negative floating point
// number from user and displays:
// a. number
// b. round off value
// c. floor value
// d. ceil value
var nagative =prompt("enter nagative number")
if (nagative < 0) {
    document.write("Number: " + nagative + "<br>");
    document.write("Round off value: " + Math.round(nagative) + "<br>");
    document.write("Floor value: " + Math.floor(nagative) + "<br>");
    document.write("Ceil value: " + Math.ceil(nagative) + "<br>");
}else {
    document.write("please enter nagative integer");
}

// Q3. Write a program that displays the absolute value
// of a number.
// Example: absolute value of -4 is 4
// and absolute value of 5 is 5
var number = +prompt("Enter a number:");

document.write("<br><br>");
document.write("Number: " + number + "<br>");
document.write("Absolute value: " + Math.abs(number));

// Q4. Write a program that simulates a dice using
// random() method of JS Math class.
// Display the value of dice in your browser.
var randomNumber = Math.random() * 6;
document.write("Random dice value: " + Math.floor(randomNumber));

// Q5. Write a program that simulates a coin toss
// using random() method of JS Math class.
// Display the value of coin in your browser.
var coin = Math.floor(Math.random() * 2) + 1;

document.write("<br><br>");

if (coin === 0) {
    document.write("Coin Toss: Heads");
} else {
    document.write("Coin Toss: Tails");
}

// Q6. Write a program that shows a random number
// between 1 and 100 in your browser.
var randomNumber = Math.random() * 100;
document.write("Random number between 1-100: " + Math.floor(randomNumber));

//7.  Write a program that asks the user about his weight. Parse the user input and display his weight in your browser
var weight = prompt("Enter your weight in kilograms: ");
document.write("The weight of user is " + weight + " kilograms");

//8.  Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user. 
var secretNumber = +prompt("Enter a number between 1 and 10");
randomNumber = Math.random() * 10;
randomNumber = Math.ceil(randomNumber);
if(secretNumber === randomNumber){
     alert("Congratulations");
}
else{
    alert("Try Again");
}