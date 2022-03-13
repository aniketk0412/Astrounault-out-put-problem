var bg, sleep, brush, gym, drink, move, eat

function preload (){
    bg=loadImage("images/iss.png");
    sleep=loadImage("images/sleep.png");
    brush=loadImage("images/brush.png");
    gym=loadImage("images/gym1.png", "images/gym2.png");
    drink=loadImage("images/drink1.png", "images/drink2.png");
    move=loadImage("images/move1.png", "images/move.png");
    eat=loadImage("images/eat2.png", "images/eat1.png");
    gym2=loadImage("images/gym2.png", "images/gym1.png");

if(keyDown("UP_ARROW")){
    astronault.addAnimation("brushing", brush);
    astronault.changeAnimation("brushing");
    astronault.y = 350;
    astronault.velocityX = 0
    astronault.velocityY = 0;
}

if(keyDown("DOWN_ARROW")){
    astronault.addAnimation("Gymming", gym);
    astronault.changeAnimation("Gymming");
    astronault.y = 350;
    astronault.velocityX = 0
    astronault.velocityY = 0;
}

if(keyDown("LEFT_ARROW")){
    astronault.addAnimation("Eating", eat);
    astronault.changeAnimation("Eating");
    astronault.y = 350;
    astronault.velocityX = 0
    astronault.velocityY = 0;
}

if(keyDown("RIGHT_ARROW")){
    astronault.addAnimation("Bathing", bath);
    astronault.changeAnimation("Bathing");
    astronault.y = 350;
    astronault.velocityX = 0
    astronault.velocityY = 0;
}

if(keyDown("m")){
    astronault.addAnimation("Moving", move);
    astronault.changeAnimation("Moving");
    astronault.y = 350;
    astronault.velocityX = 0
    astronault.velocityY = 0;
}

}

function setup(){

    astronault = createsprite(300,230);
    astronault.addAnimation("sleeping", sleep);
    astronault.scale = 0.1

}

function draw(){
backGround(bg)
}

drawSprites();

textSize(30);
stroke(3);
Fill("white");
text("INSTRUCTION : UP ARROW = Brushing, DOWNARROW = Gymming, LEFT ARROW = Eating, RIGHT ARROW = Bathing, M KEY = Moving")

