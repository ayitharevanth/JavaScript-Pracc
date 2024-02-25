//this = refers to a particular object

const car = {
    model: "mustang",
    color: "black",
    year: 2023,

    drive: function(){
        console.log(`you drive the ${this.model}`)
    }
}

console.log(car.model)
console.log(car.color)
console.log(car.year)
car.drive();