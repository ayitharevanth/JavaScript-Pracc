/*
A callback is a function passed as an argument to another function. 
*/

function square(a){
  return a*a;
}

function cube(a){
  return a*a*a;
}

function sum(a,b,fn){ //fn is a callback function here
  a = fn(a);
  b = fn(b);
  return a+b;
}

console.log(sum(1,2,square)); // we passed square function as a callback function
console.log(sum(1,2,cube)); // we passed cube function as a callback function

/*
The callback function is intended to be executed at a later time, usually after the completion of an asynchronous task or an event.
Callbacks are commonly used to handle asynchronous operations, where tasks take time to complete, such as reading files, making network requests, or handling user input. 
Callback functions can be named or anonymous, synchronous or asynchronous. They can take parameters and return values like any regular function.
*/

setTimeout(function() {
    console.log("This is a callback function.");
}, 1000);
//In this example, the function provided as an argument to setTimeout is a callback. It will be executed after a delay of 1000 milliseconds.

function doSomething(callback) {
    console.log("Doing something...");
    // Simulate an asynchronous operation
    setTimeout(function() {
      console.log("Operation completed.");
      callback(); // Execute the callback function
    }, 1000);
}
  
function afterCallback() {
  console.log("Callback executed!");
}

// Using the callback
doSomething(afterCallback);
/*
In this example, doSomething is a function that takes a callback function as an argument. After performing some operation (simulated by setTimeout in this case), it calls the provided callback function (afterCallback in this case).
*/

/*
While callbacks are a fundamental part of JavaScript, especially in older codebases or environments, modern JavaScript has introduced alternatives such as Promises and async/await to address some of the challenges associated with callbacks. Promises, in particular, provide a more structured and readable way to handle asynchronous operations and mitigate callback hell.
*/

/*
Promise = object that encapsulates the result of an asynchronous operation
          'I promise to return something in the future'
What is a promise ?
It is just a class that makes callbacks and async functions slightly more readable.

A promise can be in one of three states:
Pending: The initial state. The promise is neither fulfilled nor rejected.
Fulfilled (Resolved): The operation completed successfully, and the promise has a resulting value.
Rejected: The operation failed, and the promise has a reason for the failure, typically an error object.
*/

function doSomething() {
    console.log("Doing something...");
  
    // Creating a Promise that resolves after a simulated asynchronous operation
    return new Promise(function(resolve, reject) {
      setTimeout(function() { //async logic inside a promise
        console.log("Operation completed.");
        resolve(); // Resolve the Promise when the operation is completed
      }, 1000);
    });
}

function afterCallback() {
  console.log("Callback executed!");
}

// Using the Promise
doSomething()
  .then(afterCallback)
  .catch(function(error) {
    console.error("Error:", error);
});

/*
doSomething Function:
Instead of taking a callback as an argument, the doSomething function now returns a Promise.
Inside the Promise constructor, we simulate the asynchronous operation (in this case, using setTimeout).
When the operation is completed, we call resolve() to fulfill the Promise.

afterCallback Function:
The afterCallback function remains the same. It will be used as the callback when the Promise is resolved.

Using the Promise:
We call doSomething() to initiate the asynchronous operation.
We use the .then() method to specify what should happen after the Promise is resolved. In this case, we execute the afterCallback function.
We use the .catch() method to handle any errors that may occur during the asynchronous operation.

This approach provides a more modern and readable way to handle asynchronous operations compared to traditional callbacks. Promises offer better control over asynchronous code, improved error handling, and support for chaining multiple asynchronous operations.
*/