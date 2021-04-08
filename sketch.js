var tower , towerImg, ghost, ghostStandImg, ghostJumpImg;

function preload(){
towerImg=loadImage("tower.png");
ghostStandImg=loadImage("ghost-standing.png");

}


function setup(){
createCanvas (600, 600);
tower=createSprite(300, 300);
tower.addImage(towerImg);
tower.velocityY=1;
ghost=createSprite(300, 200, 50, 50);
ghost.addImage(ghostStandImg);
ghost.scale=0.5;
}



function draw(){


if (tower.y>400){
    tower.y=300;
}

    drawSprites();
}