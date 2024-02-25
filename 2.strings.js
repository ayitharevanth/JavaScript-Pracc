const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`; //template literals

const string4 = new String("A String object");

let fname = "Hello ";
let lname = "world";

console.log(fname.length);

console.log(fname.charAt(2));
console.log(fname[2]);

console.log(fname.indexOf('l'));
console.log(fname.lastIndexOf('l'));

console.log(fname.trim()); 

console.log(fname.replace('e','E'));
console.log(fname.replaceAll('l','L'));

console.log(fname.toUpperCase());
console.log(fname.toLowerCase());

console.log(fname.slice(4));
console.log(fname.slice(0,4));
console.log(fname.substring(0,4));
console.log(fname.slice(1,4));
console.log(fname.substring(1,4)); 
//There is another method with name 'substr' which has been depreceated, it takes 2 arguments 1st one is the index and 2nd one is the length from that index
console.log(fname.substr(1,4));

const value = "hi my name is JS";
const words = value.split(" ");  //.split() takes a delimeter argument i.e. on what basis should it be splitted
console.log(words);

/*
METHOD CHAINING: calling a method after another method
*/

let str = "abhiram"
console.log(str.charAt(0).toUpperCase());

//without method chaining
let ch = str.charAt(0);
console.log(ch.toUpperCase());


/*
toLocaleString() = return a string with language sensitive
*/

let myNum = 1234567.890;

console.log(myNum.toLocaleString("en-US")); // US english
//output = 1,234,567.89
console.log(myNum.toLocaleString("hi-IN")); // Hindi
//output = 12,34,567.89

console.log(myNum.toLocaleString("en-US",{style:"currency", currency: "USD"}));
console.log(myNum.toLocaleString(undefined,{style:"percent"}));
//when we use undefined it will use the default settings from browser
