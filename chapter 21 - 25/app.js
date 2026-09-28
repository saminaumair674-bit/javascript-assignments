//.1. Write a program that takes two user inputs for first and 
//.last name using prompt and merge them in a new variable 
//.titled fullName. Greet the user using his full name 
var firstname = prompt("Enter your first name")
var lastname = prompt("Enter your last name")
var fullname =  firstname + " " + lastname
alert ("hello " +  fullname)

//.2. Write a program to take a user input about his favorite 
//.mobile phone model. Find and display the length of user 
//.input in your browser
var mobile = prompt("Enter your favourite mobile model")
document.write("my favourite mobile model is " + mobile + "<br>")
document.write("lenght of the string is " + mobile.length + "<br>" )

// Write a program to find the index of letter “n” in the word 
//“Pakistani” and display the result in your browser . 
var pakistan = "pakistani"
var index = pakistan.indexOf("n");
document.write("string :"  + pakistan + "<br>" )
document.write("index of 'n' :"  + index + "<br>")

//. Write a program to find the last index of letter “l” in the 
//.word “Hello World” and display the result in your browser.
var hello = "hello world"
var index = hello.lastIndexOf("l");
document.write("string :"  + hello + "<br>" )
document.write("last index of 'l' :"  + index + "<br>")

// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
var str = "Pakistani";
var Index = str[3];
document.write("String: " + str + "<br>");
document.write("Character at index 3: " + Index + "<br>" );

//.Write a program to replace the “Hyder” to “Islam” in the 
//word “Hyderabad” and display the result in your browser.
var city = "Hyderabad";
var replace = city.replace("Hyder", "Islam");
document.write("City: " + city + "<br>");
document.write("After replacement: " + replace + "<br>");

//Write a program to replace all occurrences of “and” in the 
//string with “&” and display the result in your browser. 
//var message = “Ali and Sami are best friends. They play cricket and 
//football together.”; 
var message = " Ali and Sami are best friends. They play cricket and football together." 
var text =message.replaceAll("and","<b>&</b>")
document.write(text)
document.write("<br>")

//Write a program that converts a string “472” to a number 
//472. Display the values & types in your browser. 
var str = "472";
var num = Number(str);
document.write("value: " + str + "<br>");
document.write("Tpye: " + typeof(str) + "<br>");
document.write("value: " + num + "<br>");
document.write("Tpye: " + typeof(num) + "<br>");

//Write a program that takes user input. Convert and 
//show the input in capital letters.
var str = prompt("Enter Input: ");
document.write("User input: " + str + "<br>");
document.write("Upper case: " + str.toUpperCase())

//Write a program that takes user input. Convert and 
//show the input in title case.

//.Write a program that converts the variable num to 
//string. 
//var num = 35.36 ; 
//Remove the dot to display “3536” display in your browser.








