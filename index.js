function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input[type="text"]').value
}

function addNewElementAsLi() {
  const employee = retrieveEmployeeInformation()
  const employeeList = document.querySelector('ul.employee-list')
  const listItem = document.createElement('li')
  employeeList.appendChild(listItem).innerHTML = employee
}

function addNewLiOnClick() {
  const submitButton = document.querySelector('input[type="submit"]')
  submitButton.addEventListener('click', function(event) {
    addNewElementAsLi();
    document.querySelector('input[type="text"]').value = ''
  } )
}

function clearEmployeeListOnLinkClick() {
  const employeeList = document.querySelector('ul.employee-list')
  const clearEmployeeLink = document.querySelector('a')

  clearEmployeeLink.addEventListener('click', function(event) {
    employeeList.innerHTML = ''
  })
}
