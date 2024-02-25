/*
setTimeout() is a built-in JavaScript function that allows you to delay the execution of a function or 
a piece of code by a specified amount of time, measured in milliseconds. It's often used for tasks like animations, 
loading indicators, or any situation where you want to introduce a delay before executing a piece of code.
*/

console.log("Start");

// Using setTimeout to delay the execution of a function
setTimeout(function() {
    console.log("This message will be logged after 2000 milliseconds (2 seconds).");
}, 2000);

console.log("End");

/*
Output:
Start
End
This message will be logged after 2000 milliseconds (2 seconds).
*/