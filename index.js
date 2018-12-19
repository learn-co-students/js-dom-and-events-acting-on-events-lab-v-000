function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let retrieveEmployeeInformation = function() {
  return document.querySelector('main form input').value
}

let addNewElementAsLi = function() {
  let newElement = document.createElement('li')
  newElement.innerHTML = retrieveEmployeeInformation()

  document.querySelector('ul.employee-list').append(newElement)
  document.querySelector('main form').reset()
}

let addNewLiOnClick = function() {
  document.querySelector('form input:last-child').addEventListener('click', function() {
    addNewElementAsLi();
  })
}

let clearEmployeeListOnLinkClick = function() {
  let employeeList = document.querySelector('ul.employee-list')
  document.querySelector('main a').addEventListener('click', function() {
    employeeList.innerHTML = ''
  })
}
