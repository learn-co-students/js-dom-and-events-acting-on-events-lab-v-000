let dodger = document.getElementById('dodger')

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  }

  if (e.which === 39) {
    moveDodgerRight()
  }
})

function moveDodgerLeft() {
  let positionNumbers = dodger.style.left.replace('px', '')
  let position = parseInt(positionNumbers, 10)

  if (position > 0) {
    dodger.style.left = `${position - 1}px`
  }
}

function moveDodgerRight() {
  let positionNumbers = dodger.style.left.replace('px', '')
  let position = parseInt(positionNumbers, 10)

  if (position < 360) {
    dodger.style.left = `${position + 1}px`
  }
}
