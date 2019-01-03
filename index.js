function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation(){
	const info = document.querySelector('input').value;
	return `${info}`;
}

function addNewElementAsLi(){
	debugger
	const name = retrieveEmployeeInformation();
	$('.employee-list').append(`<li>${name}</li>`);
}


function addNewLiOnClick(){
	let submit = $('input[type="submit"]')[0]
	submit.addEventListener('click', function(event) {
		addNewElementAsLi();
		$('input')[0].value = '';
	});
}

function clearEmployeeListOnLinkClick(){
	let ul = document.querySelector('ul');
	let button = document.querySelector('a');

	button.addEventListener('click', function(event){
		ul.innerHTML = ""
	})
}