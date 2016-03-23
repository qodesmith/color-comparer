document.querySelector('.submit').addEventListener('click', submitButton);

function submitButton(e) {
  var bg1 = document.querySelectorAll('.color')[0];
  var bg2 = document.querySelectorAll('.color')[1];

  var color1 = document.querySelectorAll('input')[0].value;
  var color2 = document.querySelectorAll('input')[1].value;

  bg1.style.background = color1 || 'gray';
  bg2.style.background = color2 || 'gray';
};

document.body.addEventListener('keyup', function(e) {
  if(e.keyCode === 13) submitButton();
});