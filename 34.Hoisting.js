/*
Hoisting = Hoisting in JavaScript is a mechanism that moves variable and function declarations to the top of their  
           scope before execution of the code. 
           Accessing the variable or function even before declaring it.
*/

console.log(x); // we think the output might give us an error but in js we get the output as undefined (due to      hoisting)
                // Note: output will be undefined not 10  
var x = 10;     // if we declare variable with let we get an error
console.log(x);
/*
"undefined" indicates that a variable has been declared but not given a value, while "not defined" indicates that a 
variable does not exist.
*/