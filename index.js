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

}

function clearEmployeeListOnLinkClick() {

}