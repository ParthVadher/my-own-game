var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var player1,player2
var form, player, game;
var box=[],b;
var bg
function preload(){
  track = loadImage("images/bg.jpg");
  ruby = loadImage("images/ruby.png");
  emerald = loadImage("images/emerald.png");
  sapphire= loadImage("images/sapphire.png");
  gold = loadImage("images/gold.png");
  bomb = loadImage("images/bomb.png");
  b1 =loadImage("images/closed.jpg");
  b2 =loadImage("images/open.jpg");
  bg=loadImage("images/gem.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(bg)
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
