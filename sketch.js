var ball;
var database,form,game,player;
var gameState=0;
var playerCount=0;
var bgimg;


function setup(){
    createCanvas(500,500);
    database=firebase.database()
    game= new Game()
    game.getState()
    game.start()
}

function draw(){

 }
