function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()
function retrieveEmployeeInformation(){
  let textInput = document.querySelector('input')
  return textInput.value
}
function addNewElementAsLi(){
  let li = document.createElement("li")
  li.innerHTML = retrieveEmployeeInformation()
  document.querySelector('ul.employee-list').appendChild(li)
}
function addNewLiOnClick() {
  let button = document.querySelector('input[type="submit"]')
  button.addEventListener('click', function(e){
    addNewElementAsLi()
    let textInput = document.querySelector('input').value = ''
  })
}
function clearEmployeeListOnLinkClick(){
  let ul = document.querySelector('ul')
  let button = document.querySelector('a')
  button.addEventListener('click', function(e){
    ul.innerHTML = ''
  })
}
