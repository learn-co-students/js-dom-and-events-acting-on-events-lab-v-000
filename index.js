const app = "I don't do much."


var dodger = document.getElementById('dodger')
dodger.style.backgroundColor = "#FF69B4"

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
  if (left < 360) {
    dodger.style.left = `${left + 1}px`
  }
}

function moveDodgerUp() {
  var bottomNumbers = dodger.style.bottom.replace('px', '')
  var bottom = parseInt(bottomNumbers, 10)
  if (bottom < 380) {
    dodger.style.bottom = `${bottom + 1}px`
  }
}

function moveDodgerDown() {
  var bottomNumbers = dodger.style.bottom.replace('px', '')
  var bottom = parseInt(bottomNumbers, 10)
  if (bottom > 0) {
    dodger.style.bottom = `${bottom - 1}px`
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 37 || e.which === 100) {
    moveDodgerLeft()
  } else if (e.which === 39 || e.which === 102) {
    moveDodgerRight()
  } else if (e.which === 38 || e.which === 104) {
    moveDodgerUp()
  } else if (e.which === 40 || e.which === 98) {
    moveDodgerDown()
  } else if (e.which === 105) {
    moveDodgerUp()
    moveDodgerRight()
  } else if (e.which === 99) {
    moveDodgerRight()
    moveDodgerDown()
  } else if (e.which === 103) {
    moveDodgerUp()
    moveDodgerLeft()
  } else if (e.which === 97) {
    moveDodgerDown()
    moveDodgerLeft()
  }
})
