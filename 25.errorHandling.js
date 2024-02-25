/*
error = object with a description of something that went wrong
*/

try {
    // Prompt the user for input
    let x = window.prompt("enter a number: ");

    // Convert the input to a number
    x = Number(x);

    // Check if the input is not a number
    if (isNaN(x)) throw "that wasn't a number";

    // Check if the input is empty
    if (x === "") throw "that was empty";
} catch (error) {
    // Catch and handle any errors thrown in the try block
    console.log(error); // Output: "that wasn't a number" or "that was empty"
} finally {
    // This block will always execute, regardless of whether there was an error or not
    console.log("this will always execute"); // Output: "this will always execute"
}
