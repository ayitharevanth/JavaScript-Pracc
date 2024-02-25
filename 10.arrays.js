/*
array = a variable that can store multiple values of same datatype
*/

let fruits = ["apple", "orange", "banana"];

console.log(typeof(fruits)); // output = object => So in js we can say that arrays are objects
/*
internal implementation:
arr{
    0: "apple", ==> i.e at 0th index we have apple
    1: "orange",
    2: "banana",
}
*/
fruits[-1] = "mango"  //creating a negative index
console.log(fruits);

console.log(fruits);

console.log(fruits[0]);
console.log(fruits[10]) //output will be undefined

fruits.push("lemon");   // adding an element at end of an array
fruits.pop();           // removing the last element

fruits.unshift("mango") // adding element at the beginning of an array
fruits.shift()          // removes element from beginnning

console.log(fruits.length);
console.log(fruits.indexOf("apple"));

fruits.sort();           // sorts in alphabetical order
fruits.reverse();

for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}

//Reference copy

var a = [10,11];
var b = a;
b.pop();
console.log(b); 
console.log(a);
/*
output will be :
[10]
[10]
but in the code we have removed last element from 'b' and the element is also popped from 'a'
This is because both a and b are referencing the same array in memory. When you modify the array through one reference (b in this case), the change is reflected in the other reference (a in this case) because they both point to the same array object in memory.
This is called Reference copy.
*/

//Shallow copy

var a = [10,11];
var b = [...a];
b.pop();
console.log(b); 
console.log(a);

/*
In the given code, we created a shallow copy of the array 'a' and storing it in the variable 'b' using the spread operator ([...a]). A shallow copy means that the new array (b in this case) is a separate array with its own copy of the elements from the original array (a).
*/


// array.forEach() = executes a provided callback function once for each array element (it is an example of higher order function)

let students = ["abhiram", "aashish", "raju"];

students.forEach(capitalize);
students.forEach(print);        // passing callback for each element in an array

function capitalize(element, index, array)
{
    array[index] = element[0].toUpperCase()+element.substring(1);
}
function print(element)
{
    console.log(element);
}


//array.map() = executes a provided callback function once for each array element and creates a new array

let numbers = [1,2,3,4];
let squares = numbers.map(square);
squares.forEach(print);

function square(element)
{
    return Math.pow(element,2);
}

function print(element)
{
    console.log(element);
}


//array.filter() = creates a new array with all elements that pass the test provided by a function

let ages = [18, 16, 21, 17, 19, 20]
let adults = ages.filter(checkAge);
adults.forEach(print);

function checkAge(element)
{
    return element>=18;
}

function print(element)
{
    console.log(element);
}


//array.reduce() = reduces an array to a single value

let prices = [5,10,15,20]
let total = prices.reduce(checkOut)

console.log(`The total value is : ${total}`)
function checkOut(total,element)
{
    return total+element;
}


//sorting numbers in an array
/*
By default, the sort() function sorts values as strings.
This works well for strings ("Apple" comes before "Banana").
However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
Because of this, the sort() method will produce incorrect result when sorting numbers.

Ascending Sort:
The ascendingSort function takes two parameters, x and y. When you subtract y from x (x - y), the comparison function
behaves as follows:
If x is greater than y, x - y will be a positive value, indicating that x should be placed after y in the sorted array.
If x is less than y, x - y will be a negative value, indicating that x should be placed before y in the sorted array.
If x is equal to y, x - y will be 0, meaning the relative order of x and y doesn't matter for sorting.
This logic ensures that the array is sorted in ascending order, from smallest to largest.
*/

let grades = [100, 50, 90, 60, 80]
console.log("ascending order: ")
grades = grades.sort(ascendingSort);  //Here, the sort() method is used on the grades array. The sort() method takes 
                                      //an optional comparison function as an argument, which determines the sorting 
                                      //order. In this case, ascendingSort is passed as the comparison function. 
grades.forEach(print);
console.log("descending order: ")
grades = grades.sort(descendingSort);
grades.forEach(print);

function descendingSort(x,y)
{
    return y-x;
}

function ascendingSort(x, y)
{
    return x-y;
}

function print(element)
{
    console.log(element);
}

console.log("Using arrow functions: ")
grades.sort((x,y)=>y-x);
grades.forEach((element)=> console.log(element));


//shuffle an array

let cards = ["A","2","3","4","5"]
console.log(shuffle(cards))      //it will give an array

shuffle(cards)
cards.forEach(card=>console.log(card)) //it will give element by element

function shuffle(array)
{
    let currentIndex = array.length;
    while(currentIndex!=0)
    {
        let randomIndex = Math.floor(Math.random()*array.length);
        currentIndex-=1;

        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }
    return array;
}


//array of objects

let allUsers = [{
    firstName : "Sai Abhiram",
    lastName : "Jaini",
    details : {
        age : 20,
        gender : "male",
    }
},
{
    firstName : "Aashish",
    lastName : "Jaini",
    details : {
        age : 18,
        gender : "male",
    }
},
{
    firstName : "Priya",
    lastName : "Jain",
    details : {
        age : 19,
        gender : "female",
    }
},
]

console.log(allUsers[1]['firstName']);
console.log(allUsers[0]['details']['age']);