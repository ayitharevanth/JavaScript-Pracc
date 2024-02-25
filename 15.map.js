//Map = object that stores key-value pairs

const students = new Map([
    [1,"A"],
    [2,"B"],
    [3,"C"]
])

students.forEach((value,key) => console.log(`${key} ${value}`))

console.log(students.get(1))  //gives the value at a given key value
students.set(4,"D")
students.delete(4)
console.log(students.has(3))
console.log(students.size)