/*
rest parameters = represents an infinite number of parameters
...               (packs arguments into an array)
*/

let a = 1;
let b = 2
let c = 3
let d = 4
let e = 5

console.log(sum(a,b));  // gives some of 2 numbers since there are 2 arguments
//now if there are more than 2 numbers we need to create another function with 3 parameters. This is not a good practice.
//by using ret parameters we will pack all these elements into an array

// function sum(a,b){
//     return a+b;
// }

// function sum(a,b,c){
//     return a+b+c;
// }

function sum(...numbers)// function with parameters as a rest parameter
{ 
    let total = 0;
    for(let number of numbers){
        total += number;
    }
    return total;
}

console.log(sum(a,b));
console.log(sum(a,b,c));
console.log(sum(a,b,c,d));