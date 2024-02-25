/*
spread operator =  unpacks the elements
...                It is like opening a box and taking what is inside it.
*/

let numbers = [1,2,3,4,5]

let maximum = Math.max(...numbers);  //breaks down array into individual elements
console.log(maximum);