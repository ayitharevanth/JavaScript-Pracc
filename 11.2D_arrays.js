// 2D array = An array of arrays

let fruits = ["apples", "bananas", "orange"];
let vegetables = ["carrots", "onions", "potatoes"];
let meat = ["chicken", "mutton", "fish"];

let groceryList = [fruits, vegetables, meat]

for(let i=0;i<groceryList.length;i++)
{
    for(let j=0;j<groceryList[i].length;j++)
    {
        console.log(groceryList[i][j]);
    }
}

groceryList[0][0] = "mangoes";