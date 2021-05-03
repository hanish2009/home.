var student
var gameState = 'class'
var office
function preload() {

boyAni = loadAnimation("images/boy1.png", "images/boy2.png", "images/boy3.png", "images/boy4.png", "images/boy5.png");
lockImg = loadImage("images/key1.png")
door1 = loadImage("images/door1.png")
door2 = loadImage("images/door2.png")

classImg = loadImage("images/classrom.jpg")
  officeImg = loadImage("images/off.jpg")
  libraryImg = loadImage("images/library.png")
  storeImg = loadImage("images/storeroom.png")

}

function setup() {
  createCanvas(displayWidth-20, displayHeight-20);

  edges = createEdgeSprites();

  ground1 = createSprite(150,750,5000,20)
  ground1.visible = false
door = createSprite(1250,460,20,20)
door.addImage("dooring",door1)
door.addImage("doorimg",door2)
door.scale = 1.5

  student = createSprite(100,100,30,50)
  student.debug = true
  student.addAnimation("study", boyAni);
  student.scale = 1.4
  lock = createSprite(280,520,50,50)
    lock.debug = true
 lock.addImage(lockImg)
  lock.scale = 0.2
  
//door2 = createSprite(1250,460,20,20)
//door2.addImage(door2)
//door2.visible = false
}

function draw() {


student.collide(edges)
student.collide(ground1)

  if (keyDown("space") && student.y >= 100) {
    student.velocityY = -12;
  }

  student.velocityY = student.velocityY + 0.8
  if (keyDown("up")) {
    student.y = student.y - 10

  }
  if (keyDown("down")) {
    student.y = student.y + 10

  }
  if (keyDown("left")) {
    student.x = student.x - 10

  }
  if (keyDown("right")) {
    student.x = student.x + 10

  }











if(gameState === 'class'){

  background(classImg)


    ground2 = createSprite(270, 550, 250, 20)
  ground2.visible = false

  ground3 = createSprite(650, 550, 250, 20)
  ground3.visible = false
  ground4 = createSprite(1100,550,250,20)
  ground4.visible = false



student.collide(ground2)
student.collide(ground3)
student.collide(ground4)

if (student.isTouching(lock)){
  lock.visible = false
console.log(lock.x)
}

}


if (student.isTouching(door) && gameState === 'class'){
  door.changeImage("dooring",door2);
  //door.delay(1000);
  gameState = 'office';

} 

if(gameState === 'office'){ 
  background(officeImg) 
  
 student.scale = 1.5 

 door.changeImage("dooring",door1)
 
 ground5 = createSprite(280,480,400,20)
 
lock.visible = true

lock.x = 920
lock.y = 450

  door.y = 600
door.scale = 1.8
  student.collide(ground5)

  if (student.isTouching(lock)) {
    lock.destroy()
    console.log(lock.x)
  }

}


 drawSprites();
}
