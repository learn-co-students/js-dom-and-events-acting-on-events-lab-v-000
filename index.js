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
  let li = document.createElement('li')
  li.innerHTML = retrieveEmployeeInformation()
  document.querySelector('ul').appendChild(li)
}

function addNewLiOnClick() {
  let ul = document.querySelector('ul')
  ul.addEventListener('click', addNewElementAsLi())
  document.querySelector('input').value = ""
}

function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', function() {
    let list = document.getElementsByClassName('employee-list')[0]
    list.innerHTML = ''
  })
}