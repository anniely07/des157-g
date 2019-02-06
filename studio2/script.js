'user strict'
console.log('reading js');

var woodstock = document.querySelector('#woodstock');
var wsoverlay = document.querySelector('#wsoverlay');

var pencil = document.querySelector('#pencil');
var poverlay = document.querySelector('#poverlay')

var kermit = document.querySelector('#kermit');
var koverlay = document.querySelector('#koverlay')

var wsclose = document.querySelector('#wsclose');
var pclose = document.querySelector('#pclose');
var kclose = document.querySelector('#kclose');


woodstock.addEventListener('click',function(){
  wsoverlay.style.display='block';
});

pencil.addEventListener('click', function(){
  poverlay.style.display='block';
});

kermit.addEventListener('click', function(){
  koverlay.style.display='block';
});

wsclose.addEventListener('click',function(){
  wsoverlay.style.display='none';
});

pclose.addEventListener('click',function(){
  poverlay.style.display='none';
});

kclose.addEventListener('click',function(){
  koverlay.style.display='none';
});
