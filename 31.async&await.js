/*
async and await are features in JavaScript introduced with ECMAScript 2017 (ES8) that simplify the process of working with asynchronous code. They are built on top of Promises and provide a more concise and synchronous-looking syntax for handling asynchronous operations.
-> async and await are features in JavaScript introduced with ECMAScript 2017 (ES8) that simplify the process of working with asynchronous code. They are built on top of Promises and provide a more concise and synchronous-looking syntax for handling asynchronous operations.
-> await Keyword:
The await keyword is used within an async function to pause the execution of the function until a Promise is resolved. It can only be used inside an async function.
*/

// Function to simulate an asynchronous operation with a delay
async function simulateAsyncOperation() {
  console.log("Start of the asynchronous operation");

  // Simulating a delay with setTimeout
  await new Promise(resolve => setTimeout(resolve, 2000));

  console.log("End of the asynchronous operation");
}
  
  // Function to demonstrate the use of async/await
async function main() {
  console.log("Before asynchronous operation");

  // Calling the function with await to pause until the operation is complete
  await simulateAsyncOperation();

  console.log("After asynchronous operation");
}

// Calling the main function
main();

  
/*
Explanation:
The simulateAsyncOperation function uses async/await to simulate an asynchronous operation with a delay of 2 seconds (simulated using setTimeout).
The main function demonstrates the use of async/await. It calls simulateAsyncOperation using await, which pauses the execution of main until the asynchronous operation is complete.
When you run this code, you'll see log messages indicating the sequence of events in the console. The delay inside simulateAsyncOperation allows the message "End of the asynchronous operation" to be logged after a 2-second delay.
This example illustrates the basic structure of an asynchronous operation using async/await in JavaScript.
*/
