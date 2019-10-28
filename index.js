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
