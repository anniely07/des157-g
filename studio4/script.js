'user strict'
console.log('reading js');

//DECLARING VARIABLES
var bounce = document.querySelector('#bounce');
var elastic = document.querySelector('#elastic');
var easein = document.querySelector('#easein');



//SETTING UP IMAGES THAT WILL ANIMATE

//circle
var sc = Snap("#circle");
var circle = sc.circle(300,400,60);
circle.attr({
  fill: 'white',
  stroke: 'white',
  strokeOpacity: .3,
  strokeWidth: 10,
});

//rectangle
var sr = Snap("#rect");
var rectangle = sr.rect(300,400,80,80);
rectangle.attr({
  fill: 'white',
  stroke: 'white',
  strokeOpacity: .3,
  strokeWidth: 10,
});

//SVG MADE FROM ILLUSTRATOR -- a star and circle
//I made an svg file on illustrator and uploaded it to github ...documentation says it will only take links
var button = Snap("#button");
Snap.load("https://anniely07.github.io/des157-g/studio4/images/startwo.svg",
  onSVGLoaded);

function onSVGLoaded(data) {
  //circley and star are my layer names of my svg when I made it on illustrator
  //I append them seperate so I can do different things with them without affecting the other
  circley = data.select("#circley");
  star = data.select("#star");
  button.append(circley);
  button.append(star);

  //I only made path lines, I can set colors through element.attr  ... check snapsvg documentation
  star.attr({
    fill: 'white',
    stroke: 'white',
    strokeOpacity: .3,
    strokeWidth: 10,
  });


  circley.attr({
    fill: 'pink',
    stroke: 'pink',
    strokeOpacity: .3,
    strokeWidth: 10,
    x:'100',
  });

}


//CALLING FUNCTION WHEN HOVERED ON
circle.hover(hoverOver, hoverOut);
rectangle.hover(hoverOverR, hoverOut);
button.hover(hoverOverB, hoverOut);


//DECLARING MATRIX TO TRANSLATE/TRANSFORM
 var t = new Snap.Matrix();
  t.translate(100, 300);


//DEFINED FUNCTIONS
function hoverOver() {
  circle.attr({
    stroke: 'pink',
    fill: 'pink',
  });
  circle.animate({
    transform: 's3, t1, r0'}, 1000, mina.bounce);
  bounce.style.display='block';

  document.querySelector('#girl').src='images/girl2.svg'
}

function hoverOverR() {
  rectangle.attr({
    stroke: 'pink',
    fill: 'pink',
  });
  rectangle.animate({
    transform: 's3, t2, r5'}, 1000, mina.elastic);
  elastic.style.display='block';
  document.querySelector('#girl').src='images/girl2.svg'
}

function hoverOverB() {
  star.attr({
    stroke: 'pink',
    fill: 'pink',
  });
  star.animate({
    transform: 's3, t0, r5'}, 1000, mina.elastic);

  easein.style.display='block';
  document.querySelector('#girl').src='images/girl2.svg'
}

function hoverOut() {
  circle.attr({
    fill: 'white',
    stroke: 'white',
  });
  circle.animate({
  transform: ''}, 1000, mina.bounce);

  rectangle.attr({
    fill: 'white',
    stroke: 'white',
  });
  rectangle.animate({
    transform: ''}, 1000, mina.elastic);

  star.attr({
    fill: 'white',
    stroke: 'white',
  });
  star.animate({
    transform: ''}, 1000, mina.easein);


  bounce.style.display='none';
  elastic.style.display='none';
  easein.style.display='none';

  document.querySelector('#girl').src='images/girl.svg'

}

circle.click(function(){

  circle.attr({
    stroke: 'pink',
    fill: 'pink',
  });


});
