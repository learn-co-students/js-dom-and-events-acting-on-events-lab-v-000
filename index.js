function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
	return document.getElementsByTagName('input')[0].value;
}

function addNewElementAsLi() {
	let name = retrieveEmployeeInformation();

	document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${name}</li>`)
}

function addNewLiOnClick() {
	const submit = document.getElementsByTagName('input')[1];
	submit.addEventListener('click', function(e) {
		addNewElementAsLi();
		document.getElementsByTagName('input')[0].value = "";
	})
}

function clearEmployeeListOnLinkClick() {
	const clear = document.getElementsByTagName('a')[0];
	clear.addEventListener('click', function(e) {
		let list = document.querySelector('.employee-list');
		while (list.hasChildNodes()) {   
		  list.removeChild(list.firstChild);
		};
	});
}