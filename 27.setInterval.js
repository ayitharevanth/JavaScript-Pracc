/*
setInterval() is another built-in JavaScript function that repeatedly calls a function or executes a code snippet 
with a fixed time delay between each call. It continues to call the function until clearInterval() is called or the 
window is closed.
*/

function displayTime() {
    const now = new Date();
    console.log(now.toLocaleTimeString());
}

// Call displayTime function every second (1000 milliseconds)
const intervalID = setInterval(displayTime, 1000);

// After 5 seconds, stop the interval using clearInterval
setTimeout(function() {
    clearInterval(intervalID);
    console.log("Interval stopped after 5 seconds.");
}, 5000);

/*
Output (example):
10:15:23 AM
10:15:24 AM
10:15:25 AM
10:15:26 AM
10:15:27 AM
Interval stopped after 5 seconds.
*/
