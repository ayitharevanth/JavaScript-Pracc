/*
Falsy values = 0 false undefined null NaN document.all
Truthy values =  any value which is not falsy
*/

if(7){
    console.log("1st if statement");
}
if("string"){
    console.log("2nd if statement");
}
if(0){
    console.log("3rd if statement");
}
else{
    console.log("else statement")
}

/*
if else statement = a basic form of decision making
- we specify some condition
- if condition is true then required code will be executed
- else another block of code gets executed
*/

let num = 10;
if(num%2==0)
{
    console.log("even");
}
else{
    console.log("odd");
}

/*
if elseif = an extension of if else
- used when there are multiple conditions
*/

let food = "biryani"

if(food == "biryani"){
    console.log("ordered biryani");
}
else if(food=="pizza"){
    console.log("ordered pizza");
}
else{
    console.log("not yet ordered");
}

/*
switch = statement that examines a value
- for a match against many cases it gets executed
- more efficient than "else-if" ladder
*/

let grade = "A";

switch(grade){
    case 'A':
        console.log("you did great");
        break;
    case 'B':
        console.log("you did good");
        break;
    case 'C':
        console.log("you did ok");
        break;
    case 'D':
        console.log("you passed");
        break;
    case 'E':
        console.log("you passed barely");
        break;
    case 'F':
        console.log("you failed");
        break;
    default :
        console.log("invalid input");
        break;
}