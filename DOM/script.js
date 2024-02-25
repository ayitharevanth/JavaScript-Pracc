//SELECTING HTML ELEMENTS 
document.getElementsByTagName('h1')
document.getElementsByClassName('heading');
document.getElementById('ele1');

document.querySelector("h1");
document.querySelector(".heading");
document.querySelector("#ele1");

document.querySelectorAll("h1");

document.querySelector("body .heading") //hierarchial selector

//MANIPULATING TEXT
document.querySelector(".para").innerHTML = "<i>Lorem, ipsum dolor</i>"; 
document.querySelector(".heading").textContent = "Bye";

//MANIPULATING STYLE
document.querySelector(".heading").style.visibility = "hidden";
document.querySelector(".para").style.backgroundColor = "red";
//in css we have "background-color" but in js we use camelcase i.e. backgroundColor

//MANIPULATING ATTRIBUTES
document.querySelector("a").attributes;
document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href", "www.bing.com");

document.querySelector("button").addEventListener("click", showAlert)

function showAlert(){
    alert("I got clicked");
}

function create(){
    // CREATING HTML ELEMENTS 
    let create = document.createElement("h1")  // a 'h1' element is created
    create.innerHTML = "Created a h1 tag"
    document.getElementById("create").appendChild(create) // now create will be appended to our html document
}

document.getElementById("addElement").addEventListener("click",create)

/*
if you observe here there are no parenthesis for create becaue if we put parenthesis 
the function gets executed even before button is clicked i.e. as soon the js code gets loaded 
the function gets executed
*/
/*
to addEventListener function we are again passing a function as parameter, 
i.e. passing a function as a function's parameter, 
these type of functions are called higher order functions.
And the function which is passed as parameter for addEventListener is a callback
function, in this case it is create.
*/



//ANONYMOUS FUNCTION = a function without a name

document.querySelector("button").addEventListener("click", 
function showAlert(){
    alert("I got clicked");
})


//ADDING SAME EVENT LISTENER FOR MULTIPLE BUTTONS 

let len = document.querySelectorAll(".btn").length;
for(let i=0;i<len;i++)
{
    document.querySelectorAll(".btn")[i].addEventListener("click", showAlert)
}

//KEYBOARD EVENTLISTENER
document.addEventListener("keypress" , function(e){
    alert(e.key);
})

/*
When you attach an event listener to the document object, it means you are listening for keyboard 
events that occur anywhere on the entire web page.
*/