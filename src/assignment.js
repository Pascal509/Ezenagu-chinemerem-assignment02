// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {
    
};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */

function sumOfNumbers(arrayOfNumbers) {
    let sum = 0  // assign initial value to sum
    //iterate through all elements and add to sum
    for (let j = 0; j < arrayOfNumbers.length; j++)
        sum += arrayOfNumbers[j];

    return sum;
    // return arrayOfNumbers
}

console.log(sumOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// assignment.sumOfNumbers = sumOfNumbers;






/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 * 
//  * @param {Array} arrayOfNumbers the array containing even or non-even numbers
//  * @returns number the count of even numbers
//  */

function countEvenNumbers(arrayOfNumbers) {
    var count = 0; //initialize variable
    //iterate through all elements and count even numbers
    for (let i = 0; i < arrayOfNumbers.length; i++){
        if (arrayOfNumbers[i] % 2 === 0){
            count++;
        }
    }
    return count;
    // return countEvenNumbers.length;
}
console.log(countEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
assignment.countEvenNumbers = countEvenNumbers;

/**
//  * Challenge - 3
//  * 
//  * Given an array of numbers representing temperatures in Celsius,
//  * convert each number to Fahrenheit and return a new array containing the converted
//  * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
//  * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
//  * If you did Challenge - 3, remove the comment in the line just after this function
//  * 
//  * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
//  * 
//  * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
//  * @returns Array the converted temperatures in Fahrenheit
//  */



function celsiusToFahrenheit(arrayOfNumbers) {
    var Fahrenheit = (arrayOfNumbers * 1.8) + 32;
    return Fahrenheit;
}

var temperaturesInCelsius = [10, 22, 35, 44, 51, 62, 79, 85, 93, 101]
var temperaturesInFahrenheit = temperaturesInCelsius.map(celsiusToFahrenheit);

console.log (Math.trunc([temperaturesInFahrenheit]));

// assignment.celsiusToFahrenheit = celsiusToFahrenheit;

// // ========================
// // DO NOT EDIT THIS BLOCK
// module.exports = assignment;
// // ========================

