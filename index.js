document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  } else if (e.which === 39) {
    moveDodgerRight()
  } else if (e.which === 38) {
    moveDodgerUp()
  } else if (e.which === 40) {
    moveDodgerDown()
  }
})

document.addEventListener('mousewheel', function(e) {
  if (e.wheelDelta === 120) {
    moveDodgerUp()
  } else if (e.wheelDelta === -120) {
    moveDodgerDown()
  }
})

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
}, false)

document.addEventListener('mousedown', function(e) {
  if (e.which === 1) {
    moveDodgerLeft();
  } else if (e.which === 3) {
    moveDodgerRight();
  }
})

document.addEventListener('mousemove', function(e) {
  dodger.style.left = `${e.clientX}px`
  dodger.style.top = `${e.clientY}px`
})

function moveDodgerLeft() {
    let left = parseInt(dodger.style.left, 10)
    if (left < 2 && left > 0) {
        dodger.style.left = `${left - 8}px`
        dodger.className = "mad rock"
    } else if (left > 0) {
        dodger.style.left = `${left - 8}px`
        dodger.className = "happy rock"
    }
}

function moveDodgerRight() {
    let right = parseInt(dodger.style.left, 10)
    if (right < 388 && right > 370) {
        dodger.style.left = `${right + 8}px`
        dodger.className = "mad rock"
    } else if (right < 388) {
        dodger.style.left = `${right + 8}px`
        dodger.className = "happy rock"
    }
}

function moveDodgerUp() {
    let up = parseInt(dodger.style.bottom, 10)
    if (up < 388) {
        dodger.style.bottom = `${up + 8}px`
    }
}

function moveDodgerDown() {
    let down = parseInt(dodger.style.bottom, 10)
    if (down > -10) {
        dodger.style.bottom = `${down - 8}px`
    }
}
