//STEP 1
//Create an application that prompts the user for their name. Then, find the length of characters in the person’s name. Use the alert method to display the result.
//Create a variable to hold the name
let username = prompt("STEP1: Please enter your name:");
//Create a variable to hold the length of the name
let nameLength = username.length;
//Display the length of the name using alert
alert("The length of your name is: " + nameLength);

//STEP 2
//Create an application that prompts the user for their name. Then, prompt the user for a numeric value so that they can find the letter in the string based on the number they specify. Use the alert method to display the result.
//Create a variable to hold the name
username = prompt("STEP 2: Please enter your name:");
//Create a variable to hold the length of the name
nameLength = username.length;
//Create a variable to hold the numeric value
let numericValue = prompt("Please enter a number between 0 and " + (nameLength - 1) + ":");
//Check if the numeric value is within the range of the name length
if (numericValue >= 0 && numericValue < nameLength) {
    //Display the letter at the specified index using alert
    alert("The letter at index " + numericValue + " is: " + username.charAt(numericValue));
} else {
    //Display an error message if the numeric value is out of range
    alert("Error: Please enter a number between 0 and " + (nameLength - 1) + ".");
}

//STEP 3
//Create an application that prompts the user for their first name. Then, prompt the user for their last name using a second prompt. Use the alert method to display the text "Your name is: " along with the result of the first name and last name concatenated together. You will use a concatenation operator to concatenate the literal string with the result of the String object method’s result.
//Create a variable to hold the first name
let firstName = prompt("STEP 3: Please enter your first name:");
//Create a variable to hold the last name
let lastName = prompt("Please enter your last name:");
//Concatenate the first name and last name
let fullName = firstName + " " + lastName;
//Display the full name using alert
alert("Your name is: " + fullName);


//STEP 4
//Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, find and display within an alert the index of the word “fox”.
//Create a variable to hold the text
let text = "The quick brown fox jumps over the lazy dog";
//Find the index of the word "fox"
let indexOfFox = text.indexOf("fox");
//Display the index using alert
alert("The index of the word 'fox' is: " + indexOfFox);


//STEP 5
//Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable. Then, find and display within an alert the index of the last instance of the word “fox”.
//Create a variable to hold the text
text = "The quick brown fox jumps over the lazy fox";
//Find the index of the last instance of the word "fox"
let lastIndexOfFox = text.lastIndexOf("fox");
//Display the index using alert
alert("The index of the last instance of the word 'fox' is: " + lastIndexOfFox);


//STEP 6
//Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a variable. Then, prompt the user for their full name. Then, replace the text “the lazy dog” in the variable with the name that the user enters within the prompt. Use the alert method to display the result.
//Create a variable to hold the text
text = "The quick brown fox jumped over the lazy dog";
//Prompt the user for their full name
fullName = prompt("STEP 6: Please enter your full name:");
//Replace "the lazy dog" with the user's full name  
let modifiedText = text.replace("the lazy dog", fullName);
//Display the modified text using alert
alert("The modified text is: " + modifiedText);


//STEP 7
//Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, prompt the user for a word. Next, search for the word within the string that the user enters into the prompt. Use the alert method to display the result.
//Create a variable to hold the text
text = "The quick brown fox jumps over the lazy dog";
//Prompt the user for a word
let searchWord = prompt("STEP 7: Please enter a word to search for:");
//Search for the word within the text
let searchResult = text.search(searchWord);
//Check if the word was found
if (searchResult !== -1) {
    //Display the index of the word using alert
    alert("STEP 7: The word '" + searchWord + "' was found at index: " + searchResult);
} else {
    //Display a message if the word was not found
    alert("STEP 7: The word '" + searchWord + "' was not found in the text.");
}



//STEP 8
//Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable called old_string. Then, use slice(), substr(), or substring() to extract the words “the lazy dog” from the old_string variable and store that result in a second variable called new_string. Use the alert method to display the uppercase result of new_string
//Create a variable to hold the text
let old_string = "The quick brown fox jumps over the lazy dog";
//Use slice() to extract "the lazy dog" from old_string
let new_string = old_string.slice(old_string.indexOf("the lazy dog"), old_string.length);
//Convert new_string to uppercase
new_string = new_string.toUpperCase();
//Display the uppercase result using alert
alert("STEP 8: The uppercase result of new_string is: " + new_string);

//STEP 9
//Create an application that stores the text “ THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable. Make sure to add space before and after the text so that appears very similar to the text here. Use the alert method to display the lowercase result of the variable once the space has been trimmed off
//Create a variable to hold the text with spaces
let textWithSpaces = " THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
//Trim the spaces from the text
textWithSpaces = textWithSpaces.trim();
//Convert the trimmed text to lowercase
let lowerCaseText = textWithSpaces.toLowerCase();
//Display the lowercase result using alert
alert("STEP 9: The lowercase result is: " + lowerCaseText);


//STEP 10
//Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. The user clearly forgot to capitalize the first letter in the sentence. Programmatically capitalize the first letter in the sentence and display the result in an alert.
//Create a variable to hold the text
text = "the quick brown fox jumps over the lazy dog";
//Capitalize the first letter of the text
let capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);
//Display the capitalized text using alert
alert("STEP 10: The capitalized text is: " + capitalizedText); 

