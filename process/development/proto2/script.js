'user strict'
console.log('reading js');


var down = document.querySelector('#down');
var topgone = document.querySelector('#one');
var def = document.querySelector('#def');
var list = document.querySelector('#list');

down.addEventListener('click',function(){
  navigation.style.display='block';
});

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

var girl = Snap('#girl');

//PAGE TWO
var chinese = Snap("#chinese");
chinese.attr({
  fill: '#f44256'
});
var american = Snap("#american");
american.attr({
  fill: '#66C4BB'
});

//PAGE THREE
var as = Snap("#as");

//PAGE FOUR
var c1 = Snap("#circle");
var circle = c1.circle(150,150,50);
circle.attr({
  fill: '#f44256',
});

var c2 = Snap("#circle2");
var circle2 = c2.circle(150,150,50);
circle2.attr({
  fill: '#f44256',
});

var c3 = Snap("#circle3");
var circle3 = c3.circle(150,150,50);
circle3.attr({
  fill: '#f44256',
});

//CALL FUNCTIONS
go.hover(hoverOver, hoverOut);
back.hover(hoverOverback, hoverOut);
to.hover(hoverOverto, hoverOut);
china.hover(hoverOverchina, hoverOut);
american.hover(hoverOveramerican, hoverOut);
as.hover(hoverOveras, hoverOut);
girl.hover(hoverOverg, hoverOut);
c1.hover(hoverOverc1,hoverOut);
c2.hover(hoverOverc2,hoverOut);
c3.hover(hoverOverc3,hoverOut);


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

function hoverOverg() {
  not.style.display='block';
}

function hoverOveramerican() {
  american.attr({
    fill: 'white',
  });
  def.style.display='block';
}

function hoverOveras() {
  as.attr({
    fill: '#f44256',
  });
  list.style.display='block';
}

function hoverOverc1() {
  circle.attr({
    fill: '#66C4BB',
  });
  circle.animate({
    transform: 's2, t2, r2'}, 1000, mina.elastic);
}

function hoverOverc2() {
  circle2.attr({
    fill: '#66C4BB',
  });
  circle2.animate({
    transform: 's2, t2, r2'}, 1000, mina.elastic);
}

function hoverOverc3() {
  circle3.attr({
    fill: '#66C4BB',
  });
  circle3.animate({
    transform: 's2, t2, r2'}, 1000, mina.elastic);
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
    fill: '#66C4BB',
  });
  def.style.display='none';

  circle.attr({
    fill: '#f44256',
  });
  circle.animate({
  transform: ''}, 1000, mina.elastic);

  circle2.attr({
    fill: '#f44256',
  });
  circle2.animate({
  transform: ''}, 1000, mina.elastic);

  circle3.attr({
    fill: '#f44256',
  });
  circle3.animate({
  transform: ''}, 1000, mina.elastic);

}
