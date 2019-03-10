function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation(){
	let info = document.querySelector('input').value;
	return `${info}`;
}

function addNewElementAsLi(){
  let employeeName = retrieveEmployeeInformation()
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${employeeName}</li>`)
}

function addNewLiOnClick(){
	let submit = document.querySelector('input[type="submit"]')
	submit.addEventListener('click', function(event){
    addNewElementAsLi()
    document.querySelector('input').value = ''
	});
}

function clearEmployeeListOnLinkClick(){
  let button = document.querySelector('a');
  let ul = document.querySelector('ul');

	button.addEventListener('click', function(event){
		ul.innerHTML = ''
	});
}
