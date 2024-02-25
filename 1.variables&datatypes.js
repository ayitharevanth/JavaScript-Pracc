//A variable is a container for storing data

/*
2 steps for declaring a variable:
1) Declaration (var, let, const)
2) Assignment (= assignment operator)
*/

/*
A data type is a classification of data which tells the compiler or interpreter how the programmer intends to use 
the data.
JavaScript Primitive Data Types 
-> String
-> Number
-> Bigint
-> Boolean
-> Undefined
-> Null
-> Symbol
-> Object
*/

let name = "Abhiram" //string datatype
let age = 20         //number datatype
let student = true   //boolean datatype


/*
var vs let:
- variable scope = where a variable is accessable

- let = variables are limited to block scope {} (introduced in ES6)
- var = variables are limited to a function(){} (was there in ES5)

- var adds itself in window object (which is not preferred) whereas let and const will not be added.
*/

for(let i=0;i<3;i++)
{
    console.log(i);
}
console.log(i); // undefined or UncaughtReferenceError : i is not defined = let is defined only inside a block (scope = within braces)
//console.log(window) // 'i' will not be there in window object 

for(var i=0;i<3;i++)
{
    console.log(i);
}
console.log(i); // no error (displays 3) (scope = global) 
//console.log(window) //'i' will be there in window object 


//const (introduced in ES6)

let pie = 3.14
let radius = 5;
let circumference = 2*pie*radius;
console.log(circumference);

pie = 6.14 // changing pie value which should be a constant
circumference = 2*pie*radius;
console.log(circumference);
// we get wrong answer here

//So we can initialize pie with a const to make it a constant
const PIE = 3.14;
circumference = 2*PIE*radius;
console.log(circumference);
//If we update or change a const then it will give us an error.