function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

retrieveEmployeeInformation() {
	const input = document.querySelector('input');

	input.addEventListener('keydown', function(e) {
		return e.which || e.detail;
	})
}


// This retrieves the employee information from the input. It returns a string 
// equal to the value in the input.