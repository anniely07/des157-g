'user strict';
console.log('reading js');

document.querySelector('form').addEventListener('submit', processForm);
document.querySelector('#reset').addEventListener('click', resetForm);

function processForm(evt){
  //create variables to get input values from the form
  var greeting = document.querySelector('#greeting').value;
  var name = document.querySelector('#name').value;
  var verb = document.querySelector('#verb').value;
  var adj = document.querySelector('#adj').value;
  var noun1 = document.querySelector('#noun1').value;
  var adj2 = document.querySelector('#adj2').value;
  var noun2 = document.querySelector('#noun2').value;

  document.querySelector('#girl').src = 'images/euls4.gif';

  var msg=document.querySelector('#msg');
  msg.innerHTML = greeting + ' ' + 'I\'m ' + name + '. For a living I ' + verb + ' ' + adj + ' ' + noun1 + 's. My favorite thing is ' + adj2 + ' ' + noun2 + 's. It\'s nice to meet you!';

  evt.preventDefault();
  return false;
}

function resetForm(){
  var msg=document.querySelector('#msg');
  msg.innerHTML = '...';

  document.querySelector('#girl').src = 'images/euls.png';
}
