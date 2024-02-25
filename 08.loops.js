/*
while loop = repeat some code while condition is true
*/

let i = 0;
while(i<10)  //runs the code till this condition is true
{
    console.log(i);
    i++;
}


/*
do while loop = do something, then check the condition, repeat if condition is true 
- the code will get executed atleast for once
*/

let j = 0;
do {
    console.log(j);
    j++;
}
while (j < 10); // checks condition after executing cond in 'do'


/*
for loop = repeat some code for certain amount of time, till condition holds true
- very similar to while loop
*/

for(let k=0;k<10;k++)
{
    console.log(k);
}
//if you how many times to iterate the loop then use for loop else use while loop

var obj = {
    name:"abhiram",
    age: 20,
    city: "hyderabad"
}

for(var key in obj){
    console.log(key);
    console.log(obj[key]);
}


//break = breaks out of loop entirely
//continue = skip an iteration of a loop

//nested loops = a loop inside another loop