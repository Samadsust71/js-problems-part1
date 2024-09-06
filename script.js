/**
 * Task-1:
Write a function to convert temperature from Celsius to Fahrenheit.

(1°C × 9/5) + 32 = 33.8°F

 */
function celsiusToFahrenheit(celsius) {
    const result = (celsius * 9/5) +32;
    return result;
}

const celsius = 6;
const result = celsiusToFahrenheit(celsius);
console.log(result,'°F');

/**
 * Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5
output: 2

sample-input:
numbers = [5,6,11,12,98, 5]
find: 25
output: 0
 */
function repeatedNumber(numbers, find){
    let count = 0;
    for (const element of numbers) {
        if (element == find) {
           count +=1; 
        }
    }
    return count;
}

const numbers = [5,6,11,12,98,5,5,4];
const find = 5;
const repeatednum = repeatedNumber(numbers,find);
console.log(repeatednum,'times',find,'is repeated in the array.');

/**
 * Task-3:
Write a function to count the number of vowels in a string
 */
function vowelCounter(str) {
    str = str.toLowerCase();
    let count = 0;
    const vowel =['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < str.length; i++) {
      for (const element of vowel) {
        if (str[i] === element ) {
            count +=1;
        }
      }
    
   }
   return count;
}

const name1 = ' I am samad and I love EducAtion';
const result1 = vowelCounter(name1);
console.log('The number of vowels in the string:',result1);

/**
 * Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
 */

function longestWord(str) {
    const arrayOfStr = str.trim().split(' ');
    let longWord = '';
    for (const element of arrayOfStr) {
        if (element.length > longWord.length) {
            longWord = element;
        }
    }
    return longWord;
}

const str = 'I am learning Programming to become a programmer';
const result2 = longestWord(str);

console.log('The longest word in a given string:',result2);

/**
 * Task-5:
Generate a random number between 10 to 20.
 */
function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() *(max - min + 1)) + min;
}

const num1 = 10;
const num2 = 20;
const result3 = randomNumberGenerator(num1,num2);
console.log('Random number between',num1,'to',num2,':',result3);

