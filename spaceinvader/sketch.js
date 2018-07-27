function setup(){
    createCanvas(1500,1500);
    background("black");
}
let a = 1320;
let i = 20
let g = 700
let x = 650
let y = 500
function draw() {
     enemyMovement();
     background(0);
     ellipse(y,g, 300, 30);
     ellipse(y,100 ,300,30);
     y+=i
     if(y== 1320){
       i=20
     }
    if (y==0){
      i=20
    }rect(1150, 500, 100, 100);
     rect(650, 500,100,100);
     rect(900,500,100,100);
     rect(400,500,100,100);
     rect(150,500,100,100);
    fill("blue");
    rect(x,y,350,250);
   }


   function enemyMovement(){
     fill('blue');
     //a+=xdirection*3;
     ellipse(a,100,100,100);
     if(a>0) {
         a=a-1;
     }
   
    }




