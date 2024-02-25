//EASY WAY with window prompt

let username = window.prompt("Enter username: ");
console.log(username);


/*HTML textbox
- link this js file to html file 
- on a button click the data entered in the textfield will be captured.
*/
let uname;
document.getElementById("myButton").onclick = function(){
    uname = document.getElementById("myText").ariaValueMax;
    console.log(uname);
}