function draw () { 
Block8 = new Block(330,235,30,40);
Block9 = new Block(360,235,30,40);
Block10 = new Block(390,235,30,40);
Block11 = new Block(420,235,30,40);
Block12 = new Block(450,235,30,40);
Block13 = new Block(480,235,30,40); 
Block14= new Block(360,235,30,40);
Block15= new Block(390,235,30,40);
Block16 = new Block(420,235,30,40);
}
function setup(){
polygon = Bodies.circle (50,200,20);
World.add (word,polygon);


slingShot = new slingShot(his.polygon,{x:100,y:200});
}