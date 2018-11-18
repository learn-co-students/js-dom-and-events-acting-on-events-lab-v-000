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
  let button = document.querySelector('input:last-child')
  button.addEventListener('click', addNewElementAsLi())
  document.querySelector('input').value = ''
}

function clearEmployeeListOnLinkClick() {

}
