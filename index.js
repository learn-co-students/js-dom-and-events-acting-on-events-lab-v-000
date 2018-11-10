function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()




function retrieveEmployeeInformation() {
  return document.querySelector('input').value
}


function addNewElementAsLi(input) {
  let ul = document.querySelector('.employee-list')

  let list = document.createElement('li')
  list.innerHTML = retrieveEmployeeInformation();
  ul.appendChild(list)
}


function addNewLiOnClick() {
  let submit = document.querySelector('input[type="submit"]')

  function submitEmployee(e) {
    addNewElementAsLi(retrieveEmployeeInformation())
    document.querySelector('input').value = ''
  }

  submit.addEventListener('click', submitEmployee)
}


function clearEmployeeListOnLinkClick() {
  let ul = document.querySelector('ul')
  let button = document.querySelector('a')

  function clearUl(e) {
    ul.innerHTML = "";
  }

  button.addEventListener('click', clearUl);

}
