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
  let element = document.createElement('li')
  element.innerHTML = retrieveEmployeeInformation()
  let ul = document.querySelector('ul')
  ul.appendChild(element)
}

function addNewLiOnClick() {
  const input = document.querySelector("input[type='submit']")
  input.addEventListener('click', function(event) {
    addNewElementAsLi()
    document.querySelector('input').value = ""
  })
}

  function clearEmployeeListOnLinkClick() {
    let link = document.querySelector('a')
    let list = document.querySelector('.employee-list')
    link.addEventListener('click', function(event) {
    list.innerHTML = ''
    })
  }
