function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input[name="name"]').value
}

function addNewElementAsLi() {
  let employee = retrieveEmployeeInformation()
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${employee}</li>`)
}

function addNewLiOnClick() {
    document.querySelector('input[type="submit"]').addEventListener('click', function(){
    addNewElementAsLi()
    reset()
  })
}

function clearEmployeeListOnLinkClick() {
  let link = document.querySelector('a')
  let ul = document.querySelector('.employee-list')
  link.addEventListener('click', function(){
    ul.innerHTML = ''
  })
}

function reset() {
  document.querySelector('input[name="name"]').value = ''
}

