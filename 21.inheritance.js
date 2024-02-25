// inheritance = phenomenon of passing parent class properties to a child class 

class Animal{
    alive = true;
    eat(){
        console.log("animal will eat")
    }
}

class Fish extends Animal{  //fish object will have all the properties and methods of Animal class
    name = "fish";
    swim(){
        console.log("fish will swim")
    }
}

const f = new Fish();
console.log(f.alive)
console.log(f.name)
f.eat();
f.swim();


/*
In JavaScript, prototypes are a fundamental mechanism for inheritance. Every object in JavaScript has a prototype, which is another object that it can inherit properties and methods from. 
*/

var human = {
    canFly: false,
    canTalk: true
}

// var student = {
//     canStudy: true,
//     canWrite: true
// }
// student.__proto__ = human;  (this is not suggested)

var student = Object.create(human); // Set student's prototype to human
student.canStudy = true;
student.canWrite = true;

console.log(student.canFly)

/*
When you want to access a property or method of an object, JavaScript checks if that property or method exists in the object. If it doesn't find it, it looks in the object's prototype. If the property or method is still not found, JavaScript continues searching up the prototype chain until it reaches the ultimate prototype, which is the base Object.prototype in most cases.
*/