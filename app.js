var submit = document.querySelector('.submit');

submit.addEventListener('click', click);
submit.addEventListener('mousedown', mousedown);
submit.addEventListener('mouseup', mouseup);

document.body.addEventListener('keyup', function(e) {
  if(e.keyCode === 13) click();
});

function click(e) {
  var bg1 = document.querySelectorAll('.color')[0];
  var bg2 = document.querySelectorAll('.color')[1];

  var color1 = document.querySelectorAll('input')[0].value;
  var color2 = document.querySelectorAll('input')[1].value;

  if(color1) bg1.style.background = color1;
  if(color2) bg2.style.background = color2;
};

function mousedown(e) {
  submit.classList.add('active');
}

function mouseup(e) {
  submit.classList.remove('active');
}