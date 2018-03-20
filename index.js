let dodger = document.getElementById('dodger')

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left - 10}px`
  }
}

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumbers, 10)

  if (left < 360) {
    dodger.style.left = `${left + 10}px`
  }
}

document.addEventListener('keydown', (event) => {
  if (event.which === 37) {
    moveDodgerLeft()
  }
  else if (event.which === 39) {
    moveDodgerRight()
  }
})
