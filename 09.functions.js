/*FUNCTIONS : 
Functions are "self contained" modules of code that accomplish a specific task. Functions usually take in data, 
process it, and "return" a result. Once a function is written, it can be used over and over and over again. 
Functions can be "called" from the inside of other functions.
*/


//FUNCTION DECLARATION :

function square(number) 
{
    return number * number;
}

/*
The function square takes one parameter, called number. The function consists of one statement that says to return 
the parameter of the function (that is, number) multiplied by itself. The return statement specifies the value 
returned by the function, which is number * number. 
*/


/*CALLING FUNCTIONS : 
Defining a function does not execute it. Defining it names the function and specifies what to do when the function 
is called.*/
square(5);
/*The preceding statement calls the function with an argument of 5. The function executes its statements and returns 
the value 25.*/

/*
Functions must be in scope when they are called, but the function declaration can be hoisted 
(appear below the call in the code). 
The scope of a function declaration is the function in which it is declared 
(or the entire program, if it is declared at the top level).
*/

/*
PARAMETER VS ARGUMENT:
A parameter is one of the variables in a function. And when a method is called, the arguments are the data you pass 
into the method's parameters. */

//Another example of a function
function myFunc(theArr) //theArr is parameter
{
    theArr[0] = 30;
}
const arr = [45];
console.log(arr[0]); // 45
myFunc(arr);         // arr is argument
console.log(arr[0]); // 30


/*
FUNCTION EXPRESSIONS / ANONYMUS FUNCTIONS :      
function without a name (anonymus function).
*/
const squareNumber = function (number) 
{
    return number * number;
}
console.log(squareNumber(4));
/*
FIRST CLASS FNCTIONS: means that functions in a programming language are treated as first-class citizens. This means they can be:
1)Passed as arguments to other functions.
2)Returned from other functions.
3)Assigned to variables.
4)Stored in data structures.
*/

/*
ARROW FUNCTION : (ES6)
compact alternative to a traditional function expression
*/

const squareNum = (number) =>{ return number* number;}
console.log(squareNum(4))


/*
HIGHER ORDER FUNCTIONS:
JavaScript functions can also be passed as arguments to other functions or returned from other functions. Functions that operate on other functions are called higher-order functions:
*/

function multiplyByTwo(x) {
  return x * 2;
}

function operateOnNumber(num, operation) {
  return operation(num);
}

var result = operateOnNumber(3, multiplyByTwo); 
/*
In this example, operateOnNumber is a higher-order function that takes a number and a function as arguments and applies the function to the number.
*/
  

/*
NESTED FUNCTIONS : 
functions inside a function.
outer functions have access to inner functions.
inner functions are "hidden" from outside the outer function.
provide data security.
*/
let userName = "abhiram"
let userInbox = 8;

//displayUserName(); //this will throw an error = ReferenceError: displayUserName is not defined. because it is a nested function
login();

function login()
{
    displayUserName()
    displayInbox()   //accessing the nested functions inside a function only
    function displayUserName()
    {
        console.log(`welcome ${userName}`)
    }
    function displayInbox()
    {
        console.log(`you have ${userInbox} messages`)
    }
}

/*
IIFE = Immediately Invoked Function Expression
IIFE is commonly used to create private variables and methods in JavaScript. 
The variables and functions that are defined in IIFE will automatically become private.
scope of private is within the IIFE i.e. private variables can't be accessed out of IIFE.
*/
//Here's the basic syntax of an IIFE:
(function() {
    // code here
})();

(function(x, y) {
    // code here
})(arg1, arg2);


var result = (function() {
    var privateVariable = 12;

    function privateFunction() {
        return "I am also private";
    }

    return {
        getter: function() {
            console.log(privateVariable);
            console.log(privateFunction());
        },
        setter: function(val){
            privateVariable = val;
        }
    };
})();

result.setter(24);
result.getter(); // Output: "I am private" and "I am also private"


/*
Pure function = A pure function does not modify variables outside its scope, and it does not cause any observable side effects, such as changing the state of an object or performing I/O operations.
*/

function add(a, b) {
    return a + b;
}

/*
Impure functions = Impure functions can have side effects, such as modifying external variables or objects, performing I/O operations, or logging to the console.
*/

let counter = 0;

function increment() {
    counter++;
    console.log(counter);
}
