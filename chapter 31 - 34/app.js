// 1. Write a program that displays current date and time in your browser.
var currentDate = new Date();
document.write(`
    <b>Question 1 Output:</b><br>
    ${currentDate}
    <br><br><hr>
`);

// 2. Write a program that alerts the current month in words. For example December.
var now = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonth = months[now.getMonth()];
alert(`Current month: ${currentMonth}`);

// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.
var now = new Date();
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var currentDay = dayNames[now.getDay()];
var shortDay = currentDay.slice(0, 3);  
alert(`Today is ${shortDay}`);

// 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.
var now = new Date();
var dayIndex = now.getDay(); // 0 = Sunday, 6 = Saturday

var message = "";
if (dayIndex === 0 || dayIndex === 6) {
    message = "It's Fun day";
} else {
    message = "It's a regular working day";
}

document.write(`
    <b>Question 4 Output:</b><br>
    ${message}
    <br><br><hr>
`);

// 5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.
var now = new Date();
var currentDate = now.getDate();

var dateMessage = "";
if (currentDate < 16) {
    dateMessage = "First fifteen days of the month";
} else {
    dateMessage = "Last days of the month";
}

document.write(`
    <b>Question 5 Output:</b><br>
    ${dateMessage}
    <br><br><hr>
`);

// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.
myDate = new Date(); 
var millisecondsSince1970 = myDate.getTime();
var minutesSince1970 = millisecondsSince1970 / (1000 * 60);

document.write(`
    <b>Question 6 Output:</b><br>
    Current Date: ${myDate}<br>
    Elapsed milliseconds since January 1, 1970: ${millisecondsSince1970}<br>
    Elapsed minutes since January 1, 1970: ${minutesSince1970}
    <br><br><hr>
`);

// 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.
var now = new Date();
var hours = now.getHours();
if (hours < 12) {
    alert(`It's AM`);
} else {
    alert(`It's PM`);
}

// 8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.
var laterDate = new Date(2020, 11, 31); 
document.write(`
    <b>Question 8 Output:</b><br>
    Later date: ${laterDate}
    <br><br><hr>
`);

// 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015
var ramadanStart = new Date("June 18, 2015");
var today = new Date();
var diffInMs = today.getTime() - ramadanStart.getTime();
var diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
alert(`${diffInDays} days have passed since 1st Ramadan, 2015`);

// 10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.
var referenceDate = new Date(); 
var startOf2015 = new Date("January 1, 2015 00:00:00");
var timeDiff = referenceDate.getTime() - startOf2015.getTime();
var secondsElapsed = Math.floor(timeDiff / 1000);

document.write(`
    <b>Question 10 Output:</b><br>
    On reference date: ${referenceDate}<br>
    ${secondsElapsed} seconds had passed since the beginning of 2015
    <br><br><hr>
`);

// 11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.
var myDate = new Date();
var currentHours = myDate.getHours();

document.write(`
    <b>Question 11 Output:</b><br>
    Current date: ${myDate}<br>
`);

myDate.setHours(currentHours - 1); 

document.write(`
    1 hour ago, it was ${myDate}
    <br><br><hr>
`);

// 12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?
var current = new Date();
var currentYear = current.getFullYear();
current.setFullYear(currentYear - 100);
alert(`100 years back, it was: ${current}`);

// 13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.
var userAge = prompt("Enter your age:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - userAge;

document.write(`
    <b>Question 13 Output:</b><br>
    Your age is ${userAge}<br>
    Your birth year is ${birthYear}
    <br><br><hr>
`);

// 14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the fields: Customer Name, Current Month, Number of units, Charges per unit, Net Amount Payable, Late Payment Surcharge, Gross Amount Payable.
var customerName = "ABC Customer";
var currentMonth = "February";
var numberOfUnits = 410;
var chargesPerUnit = 16;
var lateSurcharge = 350;
var netAmount = numberOfUnits * chargesPerUnit;
var grossAmount = netAmount + lateSurcharge;

document.write(`
    <b>Question 14 Output:</b><br>
    <h1>K-Electric Bill</h1>
    Customer Name: <b>${customerName}</b><br>
    Month: <b>${currentMonth}</b><br>
    Number of units: <b>${numberOfUnits}</b><br>
    Charges per unit: <b>${chargesPerUnit}</b><br><br>
    Net Amount Payable (within Due Date): <b>${netAmount.toFixed(2)}</b><br>
    Late payment surcharge: <b>${lateSurcharge.toFixed(2)}</b><br>
    Gross Amount Payable (after Due Date): <b>${grossAmount.toFixed(2)}</b>
    <br><br>
`);