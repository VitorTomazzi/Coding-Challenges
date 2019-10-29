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
