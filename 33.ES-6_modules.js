/*
ECMAScript:
-> Specification: ECMAScript is a standardized scripting language specification. It defines the rules and features that a scripting language must have to be ECMAScript-compliant.
-> Versioning: ECMAScript goes through different versions (e.g., ES5, ES6/ES2015, ES2016, etc.), with each version introducing new language features and improvements.
-> Foundation: JavaScript is the most well-known and widely used implementation of ECMAScript. Other scripting languages, such as ActionScript (used in Adobe Flash) and JScript (used in Microsoft's Internet Explorer), have also implemented versions of ECMAScript.
In summary, JavaScript is a specific implementation of the ECMAScript standard. The terms are often used interchangeably, but it's important to understand that JavaScript is one of the many languages that adhere to the ECMAScript specification. When people say "ECMAScript," they may be referring to the broader standard that multiple languages can implement, whereas "JavaScript" typically refers to the specific language used in web development.
*/
/*
ECMAScript 6, also known as ES6, introduced several new features and enhancements to JavaScript, including the 
concept of modules. ES6 modules provide a way to structure your JavaScript code into smaller, reusable pieces. 
Unlike the traditional script tags, ES6 modules allow you to import and export functionalities between different 
JavaScript files.
*/

//In ES6 modules, you can export variables, functions, classes, or even entire modules using the export keyword.

// export.js
const myVariable = 42;
function myFunction() {
    // function logic
}
export { myVariable, myFunction };


//To use exported values from another module, you can use the import keyword.

// import.js
import { myVariable, myFunction } from './export.js';
console.log(myVariable);
myFunction();


//Importing Entire Module:

// import.js
import * as exportedValues from './export.js';
console.log(exportedValues.myVariable);
exportedValues.myFunction();


//You can have a default export in a module. There can be only one default export in a module.

// export.js
const myVariable1 = 42;
export default myVariable;

// import.js
import myVariable1 from './export.js';
console.log(myVariable); // logs 42

//Remember that for ES6 modules to work, your script type in the HTML file should be set to module:
<script type="module" src="import.js"></script>