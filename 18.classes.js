/*
class = a blueprint of objects.
*/

class Player{
    score = 0;
    pause(){
        console.log("you paused game")
    }
    exit(){
        console.log("you exited the game")
    }
}

const player1 = new Player();
const player2 = new Player();
const player3 = new Player();
const player4 = new Player();

console.log(player1.score);
player1.score = 2;
console.log(player1.score);
player1.pause()

//passing object as an argument for a function
displayInfo(player2)
function displayInfo(player){
    console.log(player.score);
    player.score = 2;
    console.log(player.score);
    player.pause()
}

//array of objects
const players = [player1,player2,player3,player4]
console.log(players[0].score)
console.log(players[1].score)
players[2].pause();
players[3].exit();