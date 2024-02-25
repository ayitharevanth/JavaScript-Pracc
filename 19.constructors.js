/*
constructor = special method of a class
              accepts arguments and assigns properties which is invoked when an object is created. 
*/

class Student{
    constructor(name,age,gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    study(){
        console.log(`${this.name} is studying`)
    }
}

const student1 = new Student("abhiram",20,9.0)

console.log(student1.name)
console.log(student1.age)
console.log(student1.gpa)

student1.study();