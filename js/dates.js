//STEP 1

//Create an application that gets the number of days in a month. Display that result within the console window.

let month = prompt("STEP 1: Please enter a month (1-12):");
let year = prompt("STEP 1: Please enter a year (YYYY):");
//Convert the inputs to integers
month = parseInt(month);
year = parseInt(year);
//Check if the month is valid
if (month < 1 || month > 12) {
    console.log("STEP 1: Invalid month. Please enter a number between 1 and 12.");
}   
//Check if the year is valid
if (year < 1) {
    console.log("STEP 1: Invalid year. Please enter a positive number.");
}   
// Map the month number to the month name
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let monthName = monthNames[month - 1];

// gets the number of days in a month
let daysInMonth = new Date(year, month, 0).getDate();
console.log("STEP 1: The number of days in " + monthName + " (month: " + month + ")" + " of year " + year + " is: " + daysInMonth);


//STEP 2
//Create an application that gets the month name from a particular date. Display that result within the console window.
let dateInput = prompt("STEP 2: Please enter a date (YYYY-MM-DD):");
let date = new Date(dateInput); 
//Check if the date is valid
if (isNaN(date.getTime())) {
    console.log("STEP 2: Invalid date. Please enter a valid date in the format YYYY-MM-DD.");
}   
// Get the month name from the date
monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
monthName = monthNames[date.getMonth()];
let monthNumber = date.getMonth() + 1; // Months are zero-indexed in JavaScript
console.log("STEP 2: The month name for the date " + dateInput + " is: " + monthName + " (month: " + monthNumber + ")");    

//STEP 3
//Create an application that tests whether a date is a weekend. Display that result within the console window.
dateInput = prompt("STEP 3: Please enter a date (YYYY-MM-DD):");
date = new Date(dateInput);
//Check if the date is valid
if (isNaN(date.getTime())) {
    console.log("STEP 3: Invalid date. Please enter a valid date in the format YYYY-MM-DD.");
}
// Check if the date is a weekend
let dayOfWeek = date.getDay(); // 5 = Saturday, 6 = Sunday, 0 = Monday, ...,  

if (dayOfWeek === 5 || dayOfWeek === 6) {
    console.log("STEP 3: The date " + dateInput + " is a weekend.");
} else {
    console.log("STEP 3: The date " + dateInput + " is not a weekend.");
}  
  

//STEP 4
//Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday.
date = new Date();
date.setDate(date.getDate() - 1); // Subtract one day
//Check if the date is valid
if (isNaN(date.getTime())) {
    console.log("STEP 4: Invalid date.");
}
let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let yesterday = dayNames[date.getDay()];
console.log("STEP 4: Yesterday was " + yesterday + ".");
 
//STEP 5    
//Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window.
date = new Date();
let currentDay = dayNames[date.getDay()];
let firstLetter = currentDay.charAt(0).toUpperCase();
console.log("STEP 5: The first letter of today is: " + firstLetter + ".");