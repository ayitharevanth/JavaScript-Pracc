/*
Math:
An intrinsic object that provides basic mathematics functionality and constants.
*/

let x = 3.14
console.log(Math.pow(x,4)); // x power 4
console.log(Math.sqrt(x));  // square of x
console.log(Math.round(x)); // a number to the nearest integer. If the fractional portion of the number is less than 0.5, it rounds down. If it's 0.5 or greater, it rounds up.
console.log(Math.floor(x)); // rounds down a number to the nearest integer. It effectively removes the fractional part of the number.
console.log(Math.ceil(x));  // rounds a number up to the nearest integer, regardless of the fractional part.

console.log(Math.max(1,2,3));
console.log(Math.min(1,2,3));

console.log(Math.PI);

// RANDOM NUMBER GENERATOR:
let die_num = Math.floor((Math.random()*6))+1;
console.log(die_num);