function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
	return document.querySelector('input').value;
}

function addNewElementAsLi() {
	let newLi = document.createElement('li');
	let employeeInfo = retrieveEmployeeInformation();
	let textNode = document.createTextNode(employeeInfo);
	newLi.appendChild(textNode);
	document.querySelector('ul.employee-list').appendChild(newLi);
}

function addNewLiOnClick() {
	 document.querySelector('form').addEventListener('click', function(event) {
		addNewElementAsLi();
		document.querySelector('input').value='';
	});
}

function clearEmployeeListOnLinkClick() {
	 document.querySelector('a').addEventListener('click', function(event) {
	document.querySelector('ul').innerHTML = '';
	 });
}
