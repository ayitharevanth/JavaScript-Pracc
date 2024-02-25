/*
DOM = Documnet Object Model (API)
-> An interface for changing the content of a page.
*/

//check the output in browsers console

console.log(document) //displays complete document
console.log(document.head)

console.dir(document) //displays all the properties of document
console.log(document.URL) //URL of the html page

// Get the parent element
const bodyElement = document.body;

// Get children elements of body
const childrenElements = bodyElement.children;

// Iterate through children elements and log their class names
for (const childElement of childrenElements) {
    console.log("Child Element Class:", childElement.className);
}