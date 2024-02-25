/*
Getters and setters are special methods in JavaScript that allow you to access and modify object properties. 
Getters are used to get the value of a property, and setters are used to set the value of a property. 
*/

class Circle {
    constructor(radius) {
        this._radius = radius; // Private property conventionally denoted with an underscore
    }

    // Getter method to get the radius
    get radius() {
        return this._radius;
    }

    // Setter method to set the radius
    set radius(newRadius) {
        if (newRadius <= 0) {
            console.log("Radius should be a positive number");
        } else {
            this._radius = newRadius;
        }
    }

    // Getter method to get the area
    get area() {
        return Math.PI * this._radius ** 2;
    }
}

// Create a new Circle object
const myCircle = new Circle(5);

// Get the radius using the getter
console.log("Radius:", myCircle.radius); // Output: Radius: 5

// Set a new radius using the setter
myCircle.radius = 10;

// Get the updated radius and area
console.log("Updated Radius:", myCircle.radius); // Output: Updated Radius: 10
console.log("Area:", myCircle.area); // Output: Area: 314.1592653589793

// Try setting a negative radius (setter will prevent this)
myCircle.radius = -3; // Output: Radius should be a positive number
console.log("Radius after invalid update:", myCircle.radius); // Output: Radius after invalid update: 10
