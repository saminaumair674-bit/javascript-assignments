//.1. Declare and initialize an empty multidimensional array. 
//.(Array of arrays) 
var array =[]

//. Declare and initialize a multidimensional array 
//.representing the following matrix: 
//.0 1 2 3
//.1 0 1 2
//.2 1 0 1
var arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
console.log(arr);

//. Write a program to print numeric counting from 1 to 10. 
for (i = 1; i <= 10; i++ ){
    console.log(i);
}

//. Write a program to print multiplication table of any 
//.number using for loop. Table number & length should be 
//.taken as an input from user. 
var table = Number(prompt("Enter which table do yopu want"));
var lenght = Number(prompt("Enter how much lenght of the table you want"));
for (i = 0; i <=lenght; i++){
    console.log(table + "x" + lenght + "=" + (table * i ));
}

//.Write a program to print items of the following array 
//.using for loop: 
//.fruits = [“apple”, “banana”, “mango”, “orange”, 
//.“strawberry”]
var fruits = ["apple", "banana" , "mango" , "orange" , "strawberry"]
for (i = 0; i < fruits.length; i++) {
    console.log(fruits[i] );
}
//. Generate the following series in your browser. See 
//.example output. 
//.a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
//.b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
//.c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
//.d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
//.e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

//.counting
for (i = 1; i <= 15; i++) {
    document.write(i + " ");
}
document.write("<br><br>");

//.reverse counting
for (i = 10; i >= 1; i--) {
    document.write(i + " ");
}
document.write("<br><br>");

//.even
for (i = 0; i <= 20; i+=2) {
    document.write(i + " ");
}
document.write("<br><br>");

//.odd
for (i = 1; i <= 20; i+=2) {
    document.write(i + " ");
}
document.write("<br><br>");

//.series
for (i = 2; i <= 20; i+=2) {
    document.write(i + "k  ");
}
document.write("<br><br>");

//.You have an array 
//.A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
//.Write a program to enable “search by user input” in an 
//.array. 
//.After searching, prompt the user whether the given item is 
//.found in the list or not. Example:
var answer = prompt("Enter the item")
var flag = false
var sweets = ["apple pie" , "cake" , "cookie" , "chips" , "patties"]
for(var i =0; i<sweets.length ; i++){
if(answer == sweets[i]){
    flag = true
console.log(answer,"is available");
 }
}
if(flag ==  false){
console.log(answer,"is not available");
}

//.Write a program to identify the largest number in the 
//.given array. 
//.A = [24, 53, 78, 91, 12].
var string = [24, 53, 78, 91, 12];

 var largest = string[0];

for ( i = 1; i < string.length; i++) {
    if (string[i] > largest) {
        largest = string[i];
    }
}

console.log("The largest number is: " + largest);

//. Write a program to identify the smallest number in the 
//.given array. 
//.A = [24, 53, 78, 91, 12]
var boolean = [24, 53, 78, 91, 12];

 var smallest = string[0];

for ( i = 1; i < boolean.length; i++) {
    if (boolean[i] < smallest) {
        smallest = boolean[i];
    }
}
console.log("The smallest number is: " + smallest);

//.Write a program to print multiples of 5 ranging 1 to 
//.100.
for (i = 5; i <= 100; i += 5) {
    console.log(i);
}



