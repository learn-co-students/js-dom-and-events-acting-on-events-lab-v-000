function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let userInput = document.querySelector("form input")

function retrieveEmployeeInformation(){
	return userInput.value 
}

function addNewElementAsLi(){
  let element = document.createElement('li');
  element.innerHTML = retrieveEmployeeInformation()
  document.querySelector("ul.employee-list").appendChild(element)
}

function addNewLiOnClick(){
  let element = document.querySelector('input[type="submit"]')
  element.addEventListener('click', function(event) {
    addNewElementAsLi()
	userInput.value = ''
  });
}

function clearEmployeeListOnLinkClick(){

  let list = document.querySelector('ul')
  let a = document.querySelector('a')
  a.addEventListener('click', function(event){
    list.innerHTML = ''
  });	
}


