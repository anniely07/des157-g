console.log('reading js');

// function setup(){
//   //size is creatCanvas in p5
//   //create a variable to reference the canvas
//   var myCanvas = createCanvas(800,250);
//
//   //connect myCanvas to mySketch
//   myCanvas.parent('mySketch')
// }
//
// function draw(){
//   ellipse(mouseX,mouseY,50,50);
// }


function setup(){
  //size is createCanvas in p5
  //create a variable to reference the canvas
  var myCanvas = createCanvas(800,250);

  //connect myCanvas to mySketch
  myCanvas.parent('mySketch')
}


var start1=120;
var end1=180;
var start2=300;
var end2=360;

function draw(){
  background(255,255,0);

  //arc
  for(var x=3;x<=width;x+=70){
    for(var y=50;y<=height;y+=70){
          noFill();
          stroke(0,0,255);

          arcs(x,y);


        }

   }

  if((mouseX>1)&&(mouseX<799)&&(mouseY>1)&&(mouseY<249)){
         start1--;
         end1--;
         start2--;
         end2--;
  }
  else{
         start1++;
         end1++;
         start2++;
         end2++;
  }

}

function arcs(x,y){
          arc(x+10,y,50,50,radians(start1),radians(end1));
          arc(x+15,y,50,50,radians(start1),radians(end1));
          arc(x+20,y,50,50,radians(start1),radians(end1));
          arc(x+15,y-5,50,50,radians(start2),radians(end2));
          arc(x+20,y-5,50,50,radians(start2),radians(end2));
          arc(x+25,y-5,50,50,radians(start2),radians(end2));
}
