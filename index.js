// retrieveEmployeeInformation(): This retrieves the employee 
// information from the input. It returns a string equal to the value in the input.

// addNewElementAsLi(): This function takes the value retrieved 
// from the previous retrieveEmployeeInformation function and adds 
// that string to a new list element which is appended to the ul with 
// class "employee-list".

// addNewLiOnClick(): This adds the employee name as an li element on 
// click and clears the input value.

// clearEmployeeListOnLinkClick(): This empties out the employee list when 
// "Clear employee list" button clicked.



function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
	let employeeName = document.querySelector('input').value;
	return employeeName;
}

function addNewElementAsLi() {
	let findUl = document.querySelector('ul.employee-list');
	let createLi = document.createElement('li');
	let employeeName = retrieveEmployeeInformation();

	createLi.appendChild(document.createTextNode(`${employeeName}`));
    findUl.appendChild(createLi);
}

function addNewLiOnClick() {
	let submit = document.querySelector('input[type="submit"]');
    let input = document.querySelector('input[name="name"]');

    submit.addEventListener('click', function(event) {
        addNewElementAsLi();
        input.value = '';
    });
}

function clearEmployeeListOnLinkClick() {
    let clearLink = document.querySelector('a');
    let findUl = document.querySelector('ul.employee-list');

    clearLink.addEventListener('click', function(event) {
        while (findUl.firstChild) {
            findUl.removeChild(findUl.firstChild)
        }
    })
  }