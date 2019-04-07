function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

// const form = document.body.querySelector('form')
// const clearLink = document.querySelector('a')

// form.addEventListener("submit", function(event) {
//   addNewLiOnClick();
// })
//
// clearLink.addEventListener("click", function(event) {
//   clearEmployeeListOnLinkClick();
// })

function retrieveEmployeeInformation() {
  return document.querySelector('input').value
}

function addNewElementAsLi() {

  let employeeName = retrieveEmployeeInformation()
  let ul = document.querySelector('.employee-list')
  let li = document.createElement('li');
  li.innerHTML = employeeName
  ul.appendChild(li)
}

function addNewLiOnClick() {
  document.querySelector('input[type="submit"]').addEventListener("click", function(event) {
    addNewElementAsLi();
    document.querySelector('input').value = ""
  })
}

function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener("click", function(event) {
    clearEmployeeListOnLinkClick();
    let ul = document.querySelector('.employee-list')
    ul.innerHTML = ""
  })
}
