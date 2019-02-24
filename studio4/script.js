'user strict'
console.log('reading js');

//circle
var sc = Snap("#circle");
var circle = sc.circle(300,400,60);
circle.attr({
  fill: 'tomato',
  stroke: 'cornflowerblue',
  strokeOpacity: .3,
  strokeWidth: 10,
});

//rectangle
var sr = Snap("#rect");
var rectangle = sr.rect(300,400,80,80);
rectangle.attr({
  fill: 'tomato',
  stroke: 'cornflowerblue',
  strokeOpacity: .3,
  strokeWidth: 10,
});

//button
var button = Snap("#button");
Snap.load("https://kenoleon.github.io/Front-End-Web-Dev-UI-UX/assets/images/truck.svg",
  onSVGLoaded);

function onSVGLoaded(data) {
  truckY = data.select("#truckYeah");
  textY = data.select("#textYeah");
  button.append(truckY);
  button.append(textY);
}




var overlay = document.querySelector('#overlay');


circle.hover(hoverOver, hoverOut);
rectangle.hover(hoverOverR, hoverOut);
button.hover(hoverOverB, hoverOut);

var t = new Snap.Matrix();
 t.translate(100, 300);

function hoverOver() {
  circle.attr({
    stroke: 'tomato',
    fill: 'sandybrown',
  });
  circle.animate({
    transform: 's3, t1, r0'}, 1000, mina.bounce);
}

function hoverOverR() {
  rectangle.animate({
    transform: 's3, t2, r5'}, 1000, mina.elastic);
}

function hoverOverB() {
  textY.animate({
    transform: 's3, t2, r5'}, 1000, mina.elastic);
}

function hoverOut() {
  circle.attr({
    fill: 'tomato',
    stroke: 'cornflowerblue',
  });
  circle.animate({
  transform: ''}, 1000, mina.bounce);
  rectangle.animate({
    transform: ''}, 1000, mina.elastic);
  textY.animate({
    transform: ''}, 1000, mina.easein);

}

circle.click(function(){
  overlay.style.display='block';
  circle.attr({
    stroke: 'pink',
    fill: 'pink',
  });


});
