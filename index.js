function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault();
    });
}

preventRefreshOnSubmit();
	
const input = document.querySelector('input');

function retrieveEmployeeInformation() {
	return input.value;
}

function addNewElementAsLi() {
	let li = document.createElement("li");
	let theList = document.querySelector('.employee-list');

	li.innerText = retrieveEmployeeInformation();
	theList.appendChild(li);
}

function addNewLiOnClick() {
	input.addEventListener('click', addNewElementAsLi());
	input.value = '';
}

function clearEmployeeListOnLinkClick() {
	let clearEmployeeList = document.querySelector("a")
	clearEmployeeList.addEventListener('click', function() {
		document.querySelector('.employee-list').innerHTML = '';
	})
}