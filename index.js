function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input').value
}

function addNewElementAsLi(){
  li = document.createElement("li")
  li.innerHTML = retrieveEmployeeInformation()
  document.querySelector('.employee-list').appendChild(li)
}

// adds the employee name as an li element on click
// clears the input value
function addNewLiOnClick() {
  let button = document.querySelector('input[type="submit"]')
  button.addEventListener('click', function(e){
    addNewElementAsLi()
    document.querySelector('input').value = ''
  })
}

function clearEmployeeListOnLinkClick() {
  let button = document.querySelector('a');
  let ul = document.querySelector('ul')
  button.addEventListener('click', function(e) {
  ul.innerHTML = ""
  })
}
