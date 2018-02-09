
    var dodger = document.getElementById('dodger')
   
    function moveDodgerLeft() {
        var leftNumbers = dodger.style.left.replace('px', '')
        var left = parseInt(leftNumbers, 10)
    
        if (left > 0) {
        dodger.style.left = `${left - 10}px`
        dodger.style.backgroundColor = '#FFFFFF';
        }
        else{
            dodger.style.backgroundColor = '#FF69B4';
        }
    }
    function moveDodgerRight() {
        var rightNumbers = dodger.style.left.replace('px', '')
        var right = parseInt(rightNumbers, 10)

        if (right < 360) {
            dodger.style.left = `${right + 10}px`
            dodger.style.backgroundColor = '#FFFFFF';
        }   
        else {
            dodger.style.backgroundColor = '#FF69B4';
        }
    }
    document.addEventListener('keydown', function(e) {
        
        if (e.which === 37) {
        moveDodgerLeft();
        }
        if (e.which === 39) {
        moveDodgerRight();
        }
    })
