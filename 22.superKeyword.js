// super = refers to parent class. Commonly used to invoke constructor of a parent class

class Animal {
    constructor() {
        this.alive = true;
    }

    eat() {
        console.log("animal will eat");
    }
}

class Fish extends Animal {
    constructor() {
        super(); // Invoke the constructor of the parent class (Animal)
        this.name = "fish";
    }

    swim() {
        console.log("fish will swim");
    }
}

const f = new Fish();
console.log(f.alive); // Output: true
console.log(f.name); // Output: fish
f.eat(); // Output: animal will eat
f.swim(); // Output: fish will swim
