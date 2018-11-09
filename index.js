function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input[type="text"]').value
}

function addNewElementAsLi() {
  let li = document.createElement('li')
  let ul = document.querySelector("ul.employee-list")
  let list = ul.appendChild(li)
  list.innerHTML = retrieveEmployeeInformation()
}

function addNewLiOnClick() {
  document.querySelector('input[type="submit"]').addEventListener(('click'), function(event) {
  addNewElementAsLi()
  document.querySelector('form').reset()
  })
}

function clearEmployeeListOnLinkClick(){
  document.querySelector("a").addEventListener(('click'), function(event) {
    document.querySelector(".employee-list").innerHTML = ''
  })
}
