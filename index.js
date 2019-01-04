const ul = document.querySelector('.employee-list')
const input = document.querySelector('input[type=text]')
const button = document.querySelector('input[type=submit]')

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
  const li = document.createElement('li');
  li.textContent = retrieveEmployeeInformation().toString()
  ul.appendChild(li)
  input.value = ""
}

function addNewLiOnClick() {
  button.addEventListener('click', addNewElementAsLi)
}

function clearEmployeeListOnLinkClick() {
  const link = document.querySelector('a')
  link.addEventListener('click', function() {
    const ul = document.querySelector('ul.employee-list')
    ul.innerHTML = ""
  })
}
