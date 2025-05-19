console.log("DeathbyJS.js loaded...");
//STEP 1
/* Write a JavaScript function that returns a passed string with letters in alphabetical order. Assume punctuation and number symbols are not included in the passed-in string.

Sample Data and Output
Example string: 'webmaster'
Expected Output: 'abeemrstw'
*/ 
function sortString(str) {
    return str.split('').sort().join('');
}
console.log("STEP 1: " + sortString('webmaster')); // Output: 'abeemrstw'

//STEP 2
/* Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string to upper case.

Sample Data and Output
Example string: 'the quick brown fox'
Expected Output: 'The Quick Brown Fox'
*/ 
function capitalizeFirstLetter(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log("STEP 2: " + capitalizeFirstLetter('the quick brown fox')); // Output: 'The Quick Brown Fox' 

//STEP 3
/* Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

Sample Data and Output
Example string: 'The quick brown fox'
Expected Output: 5

*/ 
function countVowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}   
console.log("STEP 3: " + countVowels('The quick brown fox')); // Output: 5

//STEP 4
/* Write a JavaScript function that generates a string id (specified length) of random characters.

Sample Data and Output
Expected Output: RCv1SBUC or PmJkc2Y2 or nIi5L0FA
*/ 
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
console.log("STEP 4: " + generateRandomString(8)); // Output: Random string of length 8

//STEP 5
/* Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.

Sample Data and Output
Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output: "United States of America"

*/ 
function longestCountryName(countries) {
    return countries.reduce((longest, current) => current.length > longest.length ? current : longest, '');
}
console.log("STEP 5: " + longestCountryName(["Australia", "Germany", "United States of America"])); // Output: "United States of America"
