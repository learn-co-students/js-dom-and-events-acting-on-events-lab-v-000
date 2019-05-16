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
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${retrieveEmployeeInformation()}</li>`)
}

 function addNewLiOnClick(){
  let submit = document.querySelector('input[type="submit"]')
  submit.addEventListener('click', function(event){
    addNewElementAsLi()
    document.querySelector('input').value = ""
  })
}

 function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', function(event) {
    document.querySelector('.employee-list').innerHTML = ""
  })
}