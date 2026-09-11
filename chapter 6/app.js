// 1. Write a program to take a number in a variable, do the required 
//    arithmetic to display the following result in your browser:
var a = 10;

document.write("Result:<br>");
document.write("The value of a is: " + a + "<br>");
document.write(".................................................<br><br>");

// Pre-Increment 
document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Post-Increment 
document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Pre-Decrement
document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Post-Decrement 
document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br>");

// 2. What will be the output in variables a, b & result after execution 
//    of the following script:
//    var a = 2, b = 1;
//    var result = --a - --b + ++b + b--;
var a = 2;
var s = 1;


var result = --a - --s + ++s + s--; 

document.write("a is " + a + "<br>");
document.write("b is " + s + "<br>");
document.write("result is " + result + "<br>");

// 3. Write a program that takes input a name from user & greet the user.
var userName = prompt("Please enter your name:");
document.write("Hello " + userName + "! Welcome to our website.<br>");


// 5. Write a program to take input a number from user & display it’s 
// multiplication table on your browser. If user does not enter 
//new number,multiplication table of 5 should be displayed by default.
var tableInput = prompt("Enter a number to display its multiplication table:", "5");

document.write("Table of " + tableInput + "<br>");
document.write(tableInput + "x1=" + (tableInput * 1) + "<br>");
document.write(tableInput + "x2=" + (tableInput * 2) + "<br>");
document.write(tableInput + "x3=" + (tableInput * 3) + "<br>");
document.write(tableInput + "x4=" + (tableInput * 4) + "<br>");
document.write(tableInput + "x5=" + (tableInput * 5) + "<br>");
document.write(tableInput + "x6=" + (tableInput * 6) + "<br>");
document.write(tableInput + "x7=" + (tableInput * 7) + "<br>");
document.write(tableInput + "x8=" + (tableInput * 8) + "<br>");
document.write(tableInput + "x9=" + (tableInput * 9) + "<br>");
document.write(tableInput + "x10=" + (tableInput * 10) + "<br>");


