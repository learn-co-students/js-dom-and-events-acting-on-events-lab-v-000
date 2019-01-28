function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

const input = document.querySelector('input')

function retrieveEmployeeInformation() {
  return document.querySelector('input').value
}


function addNewElementAsLi() {
  let name = retrieveEmployeeInformation()
  return document.querySelector('.employee-list').append(`<li>${name}</li>`)
}

function addNewLiOnClick() {
  let inputValue = document.querySelector('input[type="submit"]')
  inputValue.addEventListener('click', function(event) {
    addNewElementAsLi()
    input.value = ""
  })
}

function clearEmployeeListOnLinkClick(){
  let link = document.querySelector('a')
  let employeeList = document.querySelector('ul')
  link.addEventListener('click', function(event){
    employeeList.innerHTML = ''
  })
}