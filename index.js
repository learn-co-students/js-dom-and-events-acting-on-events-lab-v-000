function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input').value
}

function addNewElementAsLi() {
  let newLi = document.createElement('li')
  newLi.innerHTML = retrieveEmployeeInformation()
  document.querySelector("ul.employee-list").appendChild(newLi)
}

function addNewLiOnClick() {
  let submitButton = document.querySelector('input:last-child')
  submitButton.addEventListener('click', addNewElementAsLi())
  document.querySelector('input').value = ''
}

function clearEmployeeListOnLinkClick() {
  let clearButton = document.querySelector('a')
  clearButton.addEventListener('click', function(e) {
    document.querySelector('ul').innerHTML = ''
  })
}
