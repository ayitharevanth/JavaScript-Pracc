/*
anonymous objects = objects without a name
                    not directly referenced
*/

// Creating an anonymous object
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Accessing properties of the anonymous object
console.log("Name:", person.name); // Output: Name: John
console.log("Age:", person.age);   // Output: Age: 30
console.log("City:", person.city); // Output: City: New York

// Anonymous objects can also be used directly as function parameters
function printPersonDetails({ name, age, city }) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("City:", city);
}

// Passing the anonymous object as a parameter to the function
printPersonDetails({
    name: "Alice",
    age: 25,
    city: "London"
});
// Output:
// Name: Alice
// Age: 25
// City: London
