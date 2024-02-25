/*
callback = a function passed as an argument to another function
-> ensures that a function is not going to run before a task is completed
-> helps us to develope asynchronous code (one function is waiting for another) that helps to avoid errors
-> Callbacks are commonly used in asynchronous programming to handle tasks that take some time to complete, such as reading a file, making a network request, or querying a database.
   Ex: wait for a file to load
*/


sum(2, 3, displayConsole) // we are passing a function as an argument

function sum(x,y,callBack)//function name in the parameter can be anything need not be same as the name of function
{
    let result = x+y;
    callBack(result);
}

function displayConsole(output)
{
    console.log(output);
}


//callback in async

console.log("line 1");  // sync code
console.log("line 2");  // sync code
setTimeout(function (){
    console.log("line 3"); // async code
},1000);
console.log("line 4");  // sync code

/*
output = 
line 1
line 2
line 4
line 3  ==> sync code will be executed first and then async code will be executed.
*/

/*
JS is single threaded i.e. if line1 is being executed it will be executed completely then only line2 will be executed.
*/