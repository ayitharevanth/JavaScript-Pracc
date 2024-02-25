/*
TYPE CONVERSION:
changes the datatype of a value to another datatype.
*/

let a = '10';
let b = 10
console.log(a+b); //output = 1010 because here 'b' will not get added instead it will be concatenated.
//so we need to convert 'a' to number

a = Number('10');
console.log(a+b); //output = 20

console.log(typeof(a));


let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);
z1 = Boolean("") //empty string will convert to false
z2 = Boolean("non empty string"); //non-empty string will convert to true

console.log(x);
console.log(y);
console.log(z1);
console.log(z2);


//What will the output be if we pass a value that is not a number into Number()?
let x1 = Number("pizza");
console.log(x1); //output = NaN => Not a Number