/*
static = belongs to a class, not to an object
Static methods are methods that are called on the class itself, rather than on instances of the class. 
Static properties are shared among all instances of a class.
*/

class Car {
    static numberOfCars = 0;
    constructor(model) {
        this.model = model;
        Car.numberOfCars += 1;
    }
    static startRace(){
        console.log(("3....2....1....GO!!"))
    }
}

const car1 = new Car("Mustang");
const car2 = new Car("Ferrari");
const car3 = new Car("Bugati");

console.log(Car.numberOfCars); // Output: 3
Car.startRace();

/*
In the example above, numberOfCars is a static property shared among all instances of the Car class. Static properties 
are useful when you want to keep track of a value that is common to all instances of a class, such as counting the 
number of instances created.
*/

/*
In this example, startRace() is a static method of the Race class. You can call it directly on the class without creating 
a new Race object because it's defined as static. Static methods are useful for utility functions or actions that don't 
depend on the specific instance of the class.
*/