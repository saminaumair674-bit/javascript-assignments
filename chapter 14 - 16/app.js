//.Declare an empty array using JS literal notation to storestudent names in future.
var studentnameliteral = []

//.Declare an empty array using JS object notation to storestudent names in future.
var studentnameobject = new Array()

//.Declare and initialize a strings array.
var string =["peach" , "strawberry" , "blueberry"]

//.Declare and initialize a numbers array.
var number =[26 , 24 , 21]

//.Declare and initialize a boolean array.
var boolean =[true , false]

//.Declare and initialize a mixed array.
var mixed =["samina" , 26 , true ,]

//.Declare and Initialize an array and store availableeducation qualifications in Pakistan (e.g. SSC, HSC, BCS,BS, BCOM, MS, M. Phil., PhD). Show the listed
//. qualifications in your browser like:
var qualifications = ["SSC" , "HSC" , "BCS", "BS" , "BCOM" , "MS" , "M. Phil" , "PhD"]
document.write(`<h2>Qualification;</h2>`)
document.write(`1)${qualifications[0]}<br>`);
document.write(`2)${qualifications[1]}<br>`);
document.write(`3)${qualifications[2]}<br>`);
document.write(`4)${qualifications[3]}<br>`);
document.write(`5)${qualifications[4]}<br>`);
document.write(`6)${qualifications[5]}<br>`);
document.write(`7)${qualifications[6]}<br>`);

//.Write a program to store 3 student names in an array.Take
//.another array to store score of these three students.
//.Assume that total marks are 500 for each student, display
//.the scores & percentages of students like:
var students =["michael" , "john" , "tonny"]
var scores = [329 , 230 , 480]
var total = 500;
 document.write(`score of ${students[0]} of ${score[0]} percentage;n ${(score[0] / total) *100}%<br>`);
 document.write(`score of ${students[1]} of ${score[1]} percentage;n ${(score[1] / total) *100}%<br>`);
 document.write(`score of ${students[2]} of ${score[2]} percentage;n ${(score[2] / total) *100}%<br>`);

 //. Initialize an array with color names. Display the array elements in your browser. a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser. b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser. c. Add two more color to the beginning of the array. Display the updated array in your browser. d. Delete the first color in the array. Display the updated array in your browser. e. Delete the last color in the array. Display the updated array in your browser. f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser. g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then Page 2 of 6 Arrays | JAVASCRIPT remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.

var colors = ["Pink" , "Blue" , "Black" , "White" , "Grey"]
console.log(colors)

colors.unshift("Purple")
console.log(colors)

var userClr = prompt("Color you want in the end")
colors.push(userClr)
console.log(colors)

colors.unshift("Red" , "Brown")
console.log(colors)

colors.shift()
console.log(colors)

colors.pop()
console.log(colors)

var userIndex = +prompt("Which Index")
var userClr = prompt("which Color")

colors.splice(userIndex , 0 , userClr)
console.log(colors)

var deltIndex = +prompt("at which index you want to delete a color?")
var colorQuantity = +prompt("How many colors you want to remove?")

colors.splice (deltIndex , colorQuantity )
console.log(colors)