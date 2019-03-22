function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
	const name = document.getElementsByName('name')[0].value
	return name;
}

function addNewElementAsLi() {
	const ul = document.getElementsByClassName('employee-list')[0]
	const li = document.createElement('li')
	li.innerHTML = retrieveEmployeeInformation()
	ul.append(li)
}

function addNewLiOnClick() {
	const input = document.getElementsByName('name')[0]
	addNewElementAsLi()
	input.value = '';
}

function clearEmployeeListOnLinkClick() {
	const ul = document.getElementsByClassName('employee-list')[0]
	console.log(ul.childNodes)
	const link = document.querySelector('a')

	link.addEventListener('click', function() {
		ul.innerHTML = ''
	});
}