var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);
rabbit.x=World.mouseX
  drawSprites();
  
}
function createApples() {
  if (frameCount % 80==0) {
apple=createSprite(random(50,350),10,10)
apple.addImage(apple.png)
var select_sprites = Math.round(random(1,2))


if (frameCount % 80==0) {
  apple=createSprite(random(50,350),10,10)
  apple.addImage(apple.png)
  var select_sprites = Math.round(random(1,2))

  
  if (frameCount % 50==0) {
    leaf=createSprite(random(50,400),10,10)
    leaf.addImage(leaf.png)
    var select_sprites = Math.round(random(1,2))

    
    if (frameCount % 60==0) {
      grass=createSprite(random(30,370),10,10)
      grass.addImage(apple.png)
      var select_sprites = Math.round(random(1,2))

      
      if (frameCount % 70==0) {
        orangeLeaf=createSprite(random(50,350),10,10)
        orangeLeaf.addImage(orangeLeaf.png)
        var select_sprites = Math.round(random(1,2))

        
        