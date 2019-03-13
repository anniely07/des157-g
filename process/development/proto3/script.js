'user strict'
console.log('reading js');

var down = document.querySelector('#down');
var topgone = document.querySelector('#ponec');
var def = document.querySelector('#def');
var list = document.querySelector('#list');

down.addEventListener('click',function(){
  navigation.style.display='block';
  ponec.style.display='block;'
  pzeroc.style.display='none';
});

var pages = document.querySelectorAll(".page");
var links = document.querySelectorAll("a");

// bind event listener to each link by traversing the array called "links"
for (var i=0; i<links.length; i++){
 links[i].addEventListener('click', function(event){
   console.log(event.currentTarget.id);

   // hide all pages
   hidePages();

   // show the associated article by concatenating a '#' before and a c' after the event.currentTarget.id
 document.querySelector('#' + event.currentTarget.id + 'c').classList.remove('hidden');
 })
}

// function to hide all articles
function hidePages() {
  for (var i = 0; i < pages.length; i++) {
    console.log('hide pages');
    pages[i].classList.add("hidden");
  }
}

//SNAP VARIABLES

//PAGE ONE
var go = Snap("#go");
go.attr({
  fill: 'white',
  strokeWidth: 10,
});

var back = Snap("#back");
back.attr({
  fill: 'white',
  strokeWidth: 10,
});

var to = Snap("#to");
to.attr({
  fill: 'white',
  strokeWidth: 10,
});

var china = Snap("#china");
china.attr({
  fill: 'white',
  strokeWidth: 10,
});

//PAGE TWO
var chinese = Snap("#chinese");
chinese.attr({
  fill: '#f44256'
});
var american = Snap("#american");

//PAGE THREE
var as = Snap("#as");


//CALL FUNCTIONS
go.hover(hoverOver, hoverOut);
back.hover(hoverOverback, hoverOut);
to.hover(hoverOverto, hoverOut);
china.hover(hoverOverchina, hoverOut);
american.hover(hoverOveramerican, hoverOut);
as.hover(hoverOveras, hoverOut);

//DEFINE FUNCTIONS

//PAGE ONE
function hoverOver() {
  go.attr({
    fill: 'blue',
  });
  go.animate({
    transform: 's3, t1, r0'}, 1000, mina.bounce);
}

function hoverOverback() {
  back.attr({
    fill: 'blue',
  });
  back.animate({
    transform: 's3, t1, r0'}, 1000, mina.bounce);
}

function hoverOverto() {
  to.attr({
    fill: 'blue',
  });
  to.animate({
    transform: 's3, t1, r0'}, 1000, mina.bounce);
}

function hoverOverchina() {
  china.attr({
    fill: 'blue',
  });
  china.animate({
    transform: 's3, t1, r0'}, 1000, mina.bounce);
}

function hoverOveramerican() {
  american.attr({
    fill: 'blue',
  });
  def.style.display='block';
}

function hoverOveras() {
  as.attr({
    fill: '#f44256',
  });
  list.style.display='block';
}



function hoverOut() {
  go.attr({
    fill: 'white',
  });
  go.animate({
  transform: ''}, 1000, mina.bounce);

  back.attr({
    fill: 'white',
  });
  back.animate({
  transform: ''}, 1000, mina.bounce);

  to.attr({
    fill: 'white',
  });
  to.animate({
  transform: ''}, 1000, mina.bounce);

  china.attr({
    fill: 'white',
  });
  china.animate({
  transform: ''}, 1000, mina.bounce);

  american.attr({
    fill: 'black',
  });
  def.style.display='none';
  list.style.display='none';
}
