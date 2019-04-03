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
  let name = retrieveEmployeeInformation()
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `${name}`)
}

function addNewLiOnClick() {
  let name = retrieveEmployeeInformation()
  document.addEventListener('click', function(event) {
    addNewElementAsLi()
    resetName()
  }) 
}

function clearEmployeeListOnLinkClick() {
  //let ul = document.querySelector('ul')
  document.querySelector('a').addEventListener('click', function(event) {
    document.querySelector('ul').innerHTML = ''
  })
}

function resetName() {
  document.querySelector('input').value = ''
}