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
  let a = document.querySelector('.employee-list')
  let b = document.createElement('li')
   b.innerHTML = retrieveEmployeeInformation()
   a.appendChild(b)
}

function addNewLiOnClick() {
  document.querySelector('input[type="submit"]').addEventListener('click', function (e) {
      addNewElementAsLi() 
      document.querySelector('input').value = ''
  })
}

 function clearEmployeeListOnLinkClick() {
    document.querySelector('a').addEventListener('click', function(e) {
      document.querySelector('ul').innerHTML = ""
    })
 }