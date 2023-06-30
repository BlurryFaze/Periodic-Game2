var canvas;
var backgroundImage;
var titulo
var botonplay
var score
var hola
var tabla
var gameState = "PLAY"
var botonregresar
var amboton1
var veboton2
var moboton3
var roboton4
var veoboton5
var aviso
var vecboton6
var moboton7
var azboton8
var click
var la
var fondo2
var lar1
var lar2
var score=0
var lap
var gameover
var ba1
var bar1
var bar2
var rst1
var rst2
var sr
var rca1
var rca2
var ca
function preload() {
  gameoverimg = loadImage ("gameover.png")
  lapimg = loadImage ("pregunta.png")
  laimg = loadImage ("LA.webp")
  lar1img = loadImage ("Rla1.png")
  lar2img = loadImage ("Rla2.png")
  backgroundImage = loadImage("sciencebg.png");
  tituloimg = loadImage ("titulo2.png")
  tablaimg = loadImage("tabla.jpg");
  fondo2img = loadImage ("fondo.png");
  moradoimg = loadImage ("moradooscuro.png");
  amarilloimg = loadImage ("amarillo.png");
  verdeimg = loadImage ("verde claro.png")
  regresarimg= loadImage ("regresar.png");
  botonplayimg = loadImage ("botonplay.png")
 roimg = loadImage ("rojo.png");
 veoimg = loadImage ("verdeo.png")
 avisoimg = loadImage ("aviso.png")
 vecimg = loadImage ("verdecian.png")
 moimg2 = loadImage ("morado.jpg")
 azimg = loadImage ("azul.png")
 clickimg = loadImage ("click3.png");
 ba1img = loadImage ("ba1.png");
 bar1img = loadImage ("Rba1.png");
 bar2img = loadImage ("Rba2.png");
 rst1img = loadImage ("Rst1.png");
 rst2img = loadImage ("Rst2.png")
 srimg = loadImage ("Sr.jpg");
 rca1img = loadImage ("Rca1.png");
 rca2img = loadImage ("Rca2.png");
 caimg = loadImage ("Ca.png");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  fondo = createSprite(width/2,height/2,width,height);

  fondo.addImage(backgroundImage)
  fondo.scale=8
 titulo = createSprite(800,220,50,50);
 titulo.addImage(tituloimg);
 titulo.scale =0.5;

 botonplay = createSprite(800,520,50,50)
 botonplay.addImage(botonplayimg);
 botonplay.scale=0.4;
 
 fondo2 = createSprite(width/2,height/2,width,height);
 fondo2.addImage (fondo2img)
 fondo2.scale= 1000
 fondo2.visible = false;

 tabla = createSprite (width/2,height/2,100,100)
 //tabla = createSprite (800,400,100,100)
 tabla.addImage(tablaimg);
 tabla.scale = 0.1;
 tabla.visible = false;

 botonregresar = createSprite(70,675,50,50)
 botonregresar.visible =false
 botonregresar.addImage(regresarimg)
 botonregresar.scale=0.2;

 botonregresar2 = createSprite(70,675,50,50)
 botonregresar2.visible =false
 botonregresar2.addImage(regresarimg)
 botonregresar2.scale=0.2;

 botonregresar3 = createSprite(770,450,50,50)
 botonregresar3.visible =false
 botonregresar3.addImage(regresarimg)
 botonregresar3.scale=0.2;

 amboton1 = createSprite(253.5,59.5,50,50)
 amboton1.visible = false
 amboton1.addImage(amarilloimg)
  amboton1.scale=0.21;
  
 veboton2 = createSprite (253.5, 124,50,50)
  veboton2.visible=false;
veboton2.addImage(verdeimg)
veboton2.scale=1.3;
  
  moboton3 = createSprite (253.5,190.5,50,50)
  moboton3.visible=false;
  moboton3.addImage(moradoimg)
  moboton3.scale =0.9
 

  roboton4 = createSprite (537,59.5,50,50)
  roboton4.visible = false
  roboton4.addImage(roimg)
  roboton4.scale =1.3;

  veoboton5 = createSprite (537,125,50,50)
  veoboton5.visible = false
  veoboton5.addImage(veoimg)
  veoboton5.scale = 1.5;

  aviso = createSprite (800,625,50,50)
  aviso.visible = false
  aviso.addImage(avisoimg)
  aviso.scale = 0.3;

  vecboton6 = createSprite (537,190,50,50)
  vecboton6.visible = false;
  vecboton6.addImage(vecimg)
  vecboton6.scale=1.3;

  moboton7 = createSprite (820,59,50,50)
  moboton7.visible = false;
  moboton7.addImage (moimg2)
  moboton7.scale=0.13;

  azboton8 =createSprite (820,125,50,50)
  azboton8.visible = false
  azboton8.addImage(azimg)
  azboton8.scale=1;

  click = createSprite (400,630,50,50)
  click.visible = false
  click.addImage (clickimg)
  click.scale =0.3;

  la = createSprite (770,300,50,50)
  la.visible = false
  la.addImage (laimg)
  la.scale = 1;

  ba1 = createSprite (770,300,50,50)
  ba1.visible = false
  ba1.addImage (ba1img)
  ba1.scale = 1;

  
  bar1 = createSprite (335,548,50,50)
  bar1.visible = false;
  bar1.addImage (bar1img)
  bar1.scale = 0.2;

  bar2 = createSprite (1200,548,50,50)
  bar2.visible = false;
  bar2.addImage (bar2img)
  bar2.scale = 0.2;

  lar1 = createSprite (335,550,50,50)
  lar1.visible = false;
  lar1.addImage (lar1img)
  lar1.scale = 0.2;


  lar2 = createSprite (1200,550,50,50)
  lar2.visible = false;
  lar2.addImage (lar2img)
  lar2.scale = 0.2;

  sr = createSprite (770,300,50,50)
  sr.visible = false
  sr.addImage (srimg)
  sr.scale = 0.2;


  rst1 = createSprite (335,550,50,50)
  rst1.visible = false;
  rst1.addImage (rst1img)
  rst1.scale = 0.2;

  rst2 = createSprite (1200,550,50,50)
  rst2.visible = false;
  rst2.addImage (rst2img)
  rst2.scale = 0.2;

  ca = createSprite (770,300,50,50)
  ca.visible = false
  ca.addImage (caimg)
  ca.scale = 0.2;

  rca1 = createSprite (1200,550,50,50)
  rca1.visible = false;
  rca1.addImage (rca1img)
  rca1.scale = 0.2;

  rca2 = createSprite (335,550,50,50)
  rca2.visible = false;
  rca2.addImage (rca2img)
  rca2.scale = 0.2;

  lap = createSprite (770,580,50,50)
  lap.visible = false;
  lap.addImage (lapimg);
  lap.scale = 0.2;

  gameover = createSprite (770,305,50,50)
  gameover.visible = false;
  gameover.addImage (gameoverimg)
  gameover.scale = 0.5;

  score = 0;
  
}

function draw() {
  
  //image (backgroundImage,0,0,windowWidth,windowHeight)
  background("blue");
  
 
    
    
  if(mousePressedOver (botonplay)&&botonplay.visible === true) {
   botonplay.visible = false;
   titulo.visible = false;
   botonregresar.visible = true;
   tabla.visible = true;
  veboton2.visible = true
   amboton1.visible = true
   moboton3.visible = true;
   roboton4.visible =true;
   veoboton5.visible = true;
   aviso.visible = true;
   vecboton6.visible = true;
   moboton7.visible = true;
   azboton8.visible = true;
   click.visible = true;
   tabla.scale=0.9
   console.log(1)
  }
  if(mousePressedOver(botonregresar)&&botonregresar.visible === true) {
    botonplay.visible = true;
    titulo.visible = true;
    botonregresar.visible = false;
    tabla.visible = false;
    veboton2.visible=false;
    moboton3.visible=false;
    amboton1.visible= false;
    roboton4.visible = false;
    veoboton5.visible = false;
    vecboton6.visible = false;
    aviso.visible = false;
    moboton7.visible = false;
    azboton8.visible = false;
    click.visible = false;
   }
   if (mousePressedOver(lar1)&&lar1.visible === true){
    score+=5
    botonplay.visible = false;
   titulo.visible = false;
   botonregresar.visible = true;
   tabla.visible = true;
  veboton2.visible = true
   amboton1.visible = true
   moboton3.visible = true;
   roboton4.visible =true;
   veoboton5.visible = true;
   aviso.visible = true;
   vecboton6.visible = true;
   moboton7.visible = true;
   azboton8.visible = true;
   click.visible = true;
   la.visible = false;
   fondo2.visible = false;
   lar1.visible = false;
   lar2.visible = false;
   lap.visible = false;
   }
   
   
   if (mousePressedOver(lar2)&&lar2.visible === true){
    
    la.visible = false;
  
    fondo2.visible = true;
    lar1.visible = false;
    lar2.visible = false;
    lap.visible = false;
    gameover.visible = true;
    botonregresar3.visible = true;

   }

   if(mousePressedOver(botonregresar3)&&botonregresar3.visible === true) {
   
    botonregresar.visible = true;
    tabla.visible = true;
   veboton2.visible = true
    amboton1.visible = true
    moboton3.visible = true;
    roboton4.visible =true;
    veoboton5.visible = true;
    aviso.visible = true;
    vecboton6.visible = true;
    moboton7.visible = true;
    azboton8.visible = true;
    click.visible = true;
    gameover.visible = false;
    botonregresar3.visible = false;
    tabla.scale=0.9
    fondo2.visible = false;
   }
   
 
   if (mousePressedOver (azboton8)&&azboton8.visible === true){
 
    tabla.visible = false;
    botonregresar.visible = false;
    veboton2.visible=false;
    moboton3.visible=false;
    amboton1.visible= false;
    roboton4.visible = false;
    veoboton5.visible = false;
    vecboton6.visible = false;
    aviso.visible = false;
    moboton7.visible = false;
    azboton8.visible = false;
    click.visible = false;
    
    
    la.visible = true;
    fondo2.visible = true;
    lar1.visible = true;
    lar2.visible = true;
    lap.visible = true;
    
 }
 if (mousePressedOver (moboton3)&&moboton3.visible === true){
  tabla.visible = false;
  botonregresar.visible = false;
  veboton2.visible=false;
  moboton3.visible=false;
  amboton1.visible= false;
  roboton4.visible = false;
  veoboton5.visible = false;
  vecboton6.visible = false;
  aviso.visible = false;
  moboton7.visible = false;
  azboton8.visible = false;
  click.visible = false;

  ba1.visible = true;
  fondo2.visible = true;
  bar1.visible = true;
  bar2.visible = true;
  lap.visible = true;
  
 
}
if (mousePressedOver(bar2)&&bar2.visible === true){
    
  ba1.visible = false;

  fondo2.visible = true;
  bar1.visible = false;
  bar2.visible = false;
  lap.visible = false;
  gameover.visible = true;
  botonregresar3.visible = true;

 }

 if (mousePressedOver(bar1)&&bar1.visible === true){
  score+=5


 rst1.visible = true;
 rst2.visible = true;
 sr.visible = true;


 ba1.visible = false;
 
 bar1.visible = false;
 bar2.visible = false;
 
 }
 
 if (mousePressedOver(rst2)&&rst2.visible === true){
    
  sr.visible = false;

  fondo2.visible = true;
  rst1.visible = false;
  rst2.visible = false;
  lap.visible = false;
  gameover.visible = true;
  botonregresar3.visible = true;

 }
 //desde aqui es el error
 if (mousePressedOver(rst1)&&rst1.visible === true){
  score+=5
    
  rca1.visible = true;
 ca.visible = true;
 rca2.visible = true;
 
 rst1.visible = false;
 rst2.visible = false;
 sr.visible = false;


 
 }
 
 


 
 //  else if (gameState === END) {
    
   //}
     
    drawSprites();
    text("Score: "+ score, 1350,60);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

