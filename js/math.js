//STEP 1
//Create an application that prompts the user for a number. Regardless of whether they enter a negative or positive number, make sure to display the positive version of that number in the console window. If I enter -15 in the prompt and -15 is displayed in the console window, you did this one wrong.
// //Create a variable to hold the number
let number = prompt("STEP 1: Please enter a number:");
//Convert the input to an integer
number = parseInt(number); 
//Check if the number is negative
if (number < 0) {
    //Convert the number to positive
    number = Math.abs(number);
}   
//Display the positive number in the console
console.log("STEP 1: The positive version of the number is: " + number);

//STEP 2
//Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it up to the nearest whole number. Display the result within a console window.
// //Create a variable to hold the floating point value
let floatValue = prompt("STEP 2: Please enter a floating point value:");
//Convert the input to a floating point number
floatValue = parseFloat(floatValue);
//Round the number up to the nearest whole number
let roundedValue = Math.ceil(floatValue);
//Display the rounded value in the console
console.log("STEP 2: The rounded value is: " + roundedValue); 


//STEP 3
//Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it down to the nearest whole number. Display the result within a console window.
// //Create a variable to hold the floating point value
floatValue = prompt("STEP 3: Please enter a floating point value:");
//Convert the input to a floating point number
floatValue = parseFloat(floatValue);
//Round the number down to the nearest whole number
let roundedDownValue = Math.floor(floatValue);
//Display the rounded down value in the console
console.log("STEP 3: The rounded down value is: " + roundedDownValue);

//STEP 4
//Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number so you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest and smallest numbers in that list. Display both of those numbers within a console window.
// //Create a variable to hold the numbers
let numbers = prompt("STEP 4: Please enter 5 numbers separated by commas:");
//Split the input string into an array of numbers
let numberArray = numbers.split(",").map(Number);
//Find the largest number
let largestNumber = Math.max(...numberArray);
//Find the smallest number
let smallestNumber = Math.min(...numberArray);
//Display the largest and smallest numbers in the console
console.log("STEP 4: The largest number is: " + largestNumber);
console.log("STEP 4: The smallest number is: " + smallestNumber);


//STEP 5
//Create an application that prompts the user for a number. Now find the square root of that number and display the result within a console window.
// //Create a variable to hold the number
number = prompt("STEP 5: Please enter a number:");
//Convert the input to a number
number = parseFloat(number);
//Find the square root of the number
let squareRoot = Math.sqrt(number);
//Display the square root in the console
console.log("STEP 5: The square root of the number is: " + squareRoot);

