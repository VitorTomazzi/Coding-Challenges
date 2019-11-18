// Create a function that returns a base 2 (binary) represetation of a base 10 (decimal) number.
function binary(decimal) {
	return decimal.toString(2);
}

// Write a function that returns true if k^k == n for input (n, k).
// can use Math.pow(base, exponent)
function kToK(n, k) {
	return Math.pow(k, k) == n ? true : false;
}

// Create a function that returns the ASCII value of the passed in character.
function ctoa(c) {
	return c.charCodeAt(0);
}

// Write a regular expression that matches only an even number. Numbers will be presented as strings.
// a caret (^) may be used to indicate the beginning of the string,
// while a dollar sign ($) is used to mark the end
// \d   - Any digit (same as [0-9])
// Square brackets may be used to define a set of characters that may match
let x = /^\d*[02468]$/;

// Does the Object Contain a Given Key?
function hasKey(obj, key) {
	return Object.keys(obj).includes(key);
}
const hasKey = (obj, key) => (obj[key] ? true : false);

// Given a number and an object with min and max properties,
// return true if the number lies within the given range (inclusive).
function isInRange(num, range) {
	return num >= range.min && num <= range.max ? true : false;
}

//find if any number is prime
function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			//if 'not prime' shows up, number is not prime and loop will break at that multiple
			console.log(`${i}: Not Prime`);
			break;
		} else {
			console.log(`${i}: Prime`);
		}
	}
}

//write factorial equation recursively
function factorial(n) {
	//4*3*2*1
	if (n === 0) {
		return 1;
	}
	return n * factorial(n - 1);
}

//Create a function that takes a Present Value of Cash pv, an Investment Rate ir and the Number of Years years
//to be Invested and returns the Net Present Value.

function netPresentValue(pv, ir, years) {
	return pv, ir, years <= 0 ? false : `$${Math.round(pv * (1 - Math.pow(1 + ir, -years)) / ir)}`;
}

//Debug the container question Edabit
function getContainer(product) {
	let container;
	switch (product) {
		case 'Bread':
			container = 'bag';
			break;
		case 'Beer':
			container = 'bottle';
			break;
		case 'Milk':
			container = 'bottle';
			break;
		case 'Cereals':
			container = 'box';
			break;
		case 'Eggs':
			container = 'carton';
			break;
		case 'Candy':
			container = 'plastic';
			break;
		default:
			container = null;
	}
	return container;
}

//Create a function that returns the ASCII value of the passed in character.
function ctoa(c) {
	return c.charCodeAt()
}

//Create a function that takes three number arguments — one number as an input and two additional numbers 
//representing the endpoints of a closed range — and return the number limited to this range.
// If the number falls within the range, the number should be returned.
// If the number is less than the lower limit of the range, the lower limit should be returned.
// If the number is greater than the upper limit of the range, the upper limit should be returned.



//Create a function that takes a word and returns true if the word has two consecutive identical letters.
function doubleLetters(word) {
	for(let i=0; i<word.length; i++){
		if(word.charAt(i)===word.charAt(i+1)) {
			return true
		}
	}
	return false
}

//Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
function largestSwap(num) {
	let revNum = Number(String(num).split('').reverse().join(''))
	return num >= revNum ? true : false
}

//Create a function that counts the number of syllables a word has. Each syllable is separated with a dash -.
function numberSyllables(word) {
	let sylables = 1
	for(let i = 0; i< word.length; i++){
		if(word[i] === '-'){
			sylables++
		}
	}
	return sylables
}

//A number added with its additive inverse equals zero. Create a function that returns an array of additive inverses.
function additiveInverse(arr) {
	let newArr = []
	for(let i = 0; i<arr.length; i++){
		newArr.push(-arr[i])
	}
	return newArr
}

function additiveInverse(arr) {
	return arr.map(x => -x);
}

//Create a function that takes a string and returns the word count. The string will be a sentence.
function countWords(str) {
	return str.split('').filter(char => char.includes(' ')).length + 1
}

//Write two functions:
	// firstArg() should return the first parameter passed in.
	// lastArg() should return the last parameter passed in.
// Return undefined if the function takes no parameters.
function firstArg() {
	return arguments[0]
}

function lastArg() {
	return arguments[arguments.length - 1]
}

//Write a function that takes an integer and returns a string with the given number of "a"s in Edabit.
function howManyTimes(num) {
	let letter = 'a'
	return 'Ed' + letter.repeat(num) + 'bit'
}

//Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.
function Go(num) {
	let hyphen = "-"
	return hyphen.repeat(num)
}

//Write a function that takes three string arguments (first, last, word) 
//and returns true if (when alphabetically sorted) word is found between first and last.
function isBetween(first, last, word) {
	let arr = [first, last, word]
	let sorted = arr.sort((a,b)=>a.localeCompare(b))
	return sorted[0] == first && sorted[sorted.length-1] == last ? true : false
}

// You are given 2 out of 3 of the angles in a triangle, in degrees.
// Write a function that classifies the missing angle as either "acute", "right", or "obtuse" based on its degrees.
	// An acute angle is less than 90 degrees.
	// A right angle is exactly 90 degrees.
	// An obtuse angle is greater than 90 degrees (but less than 180 degrees).
	function missingAngle(angle1, angle2) {
		return angle1 + angle2 < 90 ? 'obtuse'
			: angle1 + angle2 > 90 ? 'acute'
			: 'right';
	}

//Write a function that checks if two numbers are either:
// Smaller than 0
// Greater than 0
// Exactly 0
function both(n1, n2) {
	return (n1 * n2 > 0) || (n1,n2 === 0) ? true : false
}

//Create a function that returns the smaller number.
//Math.min does an internal conversion of string numbers, i.e '9', 
//but if anything inside the string is NaN, it wont work
function smallerNum(n1, n2) {
	return Math.min(n1, n2).toString();
}