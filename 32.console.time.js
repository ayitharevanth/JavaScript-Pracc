/*
console.time() is a method in JavaScript that allows you to measure the time it takes to execute a specific block of 
code. It starts a timer, and then console.timeEnd() is used to stop the timer and display the elapsed time in 
milliseconds. This is useful for profiling and understanding the performance of different parts of your code.
*/

// Start the timer
console.time("myTimer");

// Some code you want to measure the execution time of
for (let i = 0; i < 1000000; i++) {
    // Do some computations
}

// Stop the timer and display the elapsed time
console.timeEnd("myTimer");
