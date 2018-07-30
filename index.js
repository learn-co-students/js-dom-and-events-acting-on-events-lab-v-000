// const app = "I don't do much."

var dodger = document.getElementById('dodger');
var game

function init() {
  document.body.addEventListener('keydown', function(e){
    if (e.which === 37) {
      moveDodgerLeft();
    } else if (e.which === 39) {
      moveDodgerRight();
    }
  })
}

function moveDodgerLeft() {
  var position = dodger.style.left.replace('px', '');
  var left = parseInt(position, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  var position = dodger.style.left.replace('px', '');
  var left = parseInt(position, 10);

  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}


init()
