/*
ARITHEMATIC EXPRESSIONS:
combination of operators and operands.
*/

console.log(10+5); //addition
console.log(10-5); //subtraction
console.log(10*5); //multiplication
console.log(10/5); //division 
console.log(10%5); //modulus => gives remainder

let a = 10;
console.log(a++); //prints value of 'a' and then it increments
console.log(++a); //increments value of 'a' and then prints it
console.log(a--);
console.log(--a);

/*
OPERATOR PRECEDENCE:
1. parenthesis
2. exponents
3. multiplication and division
4. addition and subtraction
*/

let result =1+2*(3+4);
console.log(result);


/*
LOGICAL OPERATORS:
- AND = && = returns true if all the conditions are true
- OR = || = returns true if any one of the condition is true
- NOT = ! = reverses a condition's boolean value (true->false ; false->true)
*/

/*
TERNARY OPERATOR:
- ? = condition ? blockOfCode_If_ConditonIs_True : blockOfCode_If_ConditonIs_False
*/

let num = 10;

num%2==0 ? console.log("even") : console.log("odd");