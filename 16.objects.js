/*
object = any real world entity 
it has properties and methods
properties: what an object has
methods: what an object can do
*/

const car = {
    model: "mustang",
    color: "black",
    year: 2023,

    drive: function(){
        console.log("you drive the car")
    }
}

console.log(car.model)
console.log(car.color)
console.log(car.year)
car.drive();

car.model = "ferrari"; //updating
delete car.year; //deleting
console.log(car);