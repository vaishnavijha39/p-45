var Money,thief,floor1,door1,money1,money2,money3,money4;
var floor2,score,box2,laser1,door2,floor3,computer,box,laser2;
var laser3,laser4,laser5,suitcase,edges;

function setup(){
createCanvas(1200,400)
floor1 = createSprite(500,85,1200,10);
floor1.shapeColor='black';
Money = createSprite(1000,1000,10,10);
thief = createSprite(20,38,20,40);
edges=createEdgeSprites()
door1 = createSprite(1160,85,120,10);
door1.shapeColor='brown' ;
money1 = createSprite(268,55,10,10);
money2 = createSprite(200,122,10,10);
money3 = createSprite(280,255,10,10);
money4 = createSprite(170,355,10,10);

score =0;
floor2 = createSprite(600,190,1200,10);
floor2.shapeColor='black';
box = createSprite(206,165,40,40);
box.shapeColor='orange';
laser1 = createSprite(0,110,10,45);
laser1.shapeColor='red';
laser1.velocityX=5;
door2 = createSprite(5,150,10,70);
door2.shapeColor='brown';
floor3 = createSprite(600,290,1200,10);
floor3.shapeColor='black';
door3 = createSprite(1160,290,120,10);
door3.shapeColor='brown';
computer = createSprite(1155,240,10,10);

box2 = createSprite(1155 ,272,35,25);
box2.shapeColor='orange';
laser2 = createSprite(300,325,10,10);
laser3 = createSprite(225,364,10,10);
laser4 = createSprite(150,325,10,10);
laser5 = createSprite(75,364,10,10);
laser2.shapeColor='red';
laser3.shapeColor='red';
laser4.shapeColor='red';
laser5.shapeColor='red';

laser2.velocityY=6;
laser3.velocityY=6;
laser4.velocityY=6;
laser5.velocityY=6;

suitcase = createSprite(30,380,10,10);

}
function draw() {
background("lightgreen");

  
drawSprites()


}

