/*
Synchronous code executes line by line. Each operation completes before the next one begins. This means that if there 
is a time-consuming task, such as reading a large file or making a network request, the entire program will be blocked 
until that task is completed. This can lead to unresponsive applications, especially in web development, where user 
interfaces can freeze if heavy computations are being performed synchronously.
SYNCHRONOUS CODE WILL BE EXECUTED IN A SEQUENCE.

Asynchronous code, on the other hand, allows tasks to be executed in the background and provides a mechanism for 
notifying the program when those tasks are completed. Asynchronous operations are typically used for I/O operations, 
such as reading files, making network requests, or querying databases, which can take a significant amount of time. 
Instead of waiting for these operations to finish, the program can continue executing other tasks concurrently.
ASYNCHRONOUS CODE WILL NOT BE EXECUTED IN A SEQUENCE.
*/


/*
Example =
task a : 5 secs
task b : 2 secs
task c : 15 secs
task d : 1 secs

synchronous => total time for execution = 5 + 2 + 15 + 1 = 23secs 

asynchronous => total time for execution = 15secs (all the tasks will be executed at a time so the time taken will be equal to the maximum time taken among the given tasks) 
*/

/*
when do we use async code ?
-> setTimeout
-> setInterval
-> promises
-> fetch
-> axios
-> XMLHttpRequest
-> code which is used to access server,api etc.
*/



console.log("Start");
console.log("this is a synchronous code");
console.log("End");


// Synchronous part
console.log("Start");

// Simulating an asynchronous task with setTimeout
setTimeout(function() {
    // This function represents an asynchronous task
    console.log("Middle (Async)");
}, 2000); // This asynchronous task will be scheduled to execute after 2 seconds

console.log("End");

/*
Output Explanation:
- The console.log("Start") is a synchronous operation, and it will be executed immediately.
- The setTimeout function is an asynchronous operation. It schedules the provided function to be executed after a specified delay (in this case, 2000 milliseconds or 2 seconds).
- While waiting for the setTimeout delay, the control doesn't pause. It moves to the next synchronous operation.
- The console.log("End") is executed immediately after the setTimeout is scheduled, without waiting for the asynchronous task to complete.
- After the 2-second delay, the asynchronous task (the callback function inside setTimeout) is triggered, and it prints "Middle (Async)" to the console.

Note: JavaScript uses an event-driven, non-blocking I/O model. Asynchronous operations like setTimeout don't block the execution of the rest of the code. Instead, they are scheduled to run in the future. The event loop manages the execution of both synchronous and asynchronous tasks, ensuring efficient use of resources and responsiveness in web applications.
*/



/*
http://latentflip.com/loupe/
visit this url for better visualization of async nature of js
*/