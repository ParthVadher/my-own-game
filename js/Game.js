class Game {
constructor(){

}

getState(){
  var gameStateRef  = database.ref('gameState');
  gameStateRef.on("value",function(data){
      gameState = data.val();
  })

}

update(state){
  database.ref('/').update({
    gameState: state
  });
}

async start(){
  if(gameState === 0){
    player = new Player();
    var playerCountRef = await database.ref('playerCount').once("value");
    if(playerCountRef.exists()){
      playerCount = playerCountRef.val();
      player.getCount();
    }
    form = new Form()
    form.display();
  }


}

play(){
form.hide();

Player.getPlayerInfo();

if(allPlayers !== undefined){
  background(rgb(198,135,103));
  image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
  box=[]
  var x = 550 ; 
  var y = 200 ;
  for(var i= 1;i<=6;i++){
    for (var j=1;j<=6;j++){
  b=createSprite(x,y,20,20)
  box.push(b);
  x=x+50
  b.addImage(b1)
  b.scale=0.25
    }
    x=550
    y=y+50
    
  }

  
var displayPosition=60
var index=0
var j = 120
for(var plr in allPlayers){
//add 1 to the index for every loop
index = index + 1 ;
displayPosition+=20


fill("orange")
textSize(25);
text("NAME : "+allPlayers[plr].name ,j,displayPosition)

j=j+789

var r=Math.round(random(1,5))

for(var i =0;i<=35;i++){
if(mousePressedOver(box[i])&&plr===player.index){

switch(r){

case 1:box[i].addImage(emerald)
break;
case 2:box[i].addImage(ruby)
break;
case 3:box[i].addImage(gold)
break;
case 4:box[i].addImage(sapphire)
break;
case 5:box[i].addImage(bomb)
break;
default:break;                                                                                                                                                                                                                                                                                              
}                                                                                          
}
}
}  
}
drawSprites();
}
}