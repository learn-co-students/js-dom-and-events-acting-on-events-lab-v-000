function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let input = document.querySelector('input')

function retrieveEmployeeInformation(){
  return input.value
}

function addNewElementAsLi() {
  let returnedEmp = retrieveEmployeeInformation()
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${returnedEmp}</li>`)
}

function addNewElementAsLi(){
  let employeeName = retrieveEmployeeInformation()
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${employeeName}</li>`)
}

function addNewLiOnClick(){
  let newEmp = document.querySelector('input[type="submit"]')
  newEmp.addEventListener('click', function(event) {
  addNewElementAsLi()
  resetInput()
  })
}

function clearEmployeeListOnLinkClick () {
  let aNode = document.querySelector('a')
  let ulNode = document.querySelector('ul')
  aNode.addEventListener('click', function(event) {
    ulNode.innerHTML = ""
  })
}

function resetInput () {
  document.querySelector('input').value = ''
}