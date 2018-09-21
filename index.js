function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()


function retrieveEmployeeInformation() {
  let input = document.querySelector('input').value
  return input
}

function addNewElementAsLi() {
  let employee = retrieveEmployeeInformation()
  document.querySelector('.employee-list')
    .insertAdjacentHTML('afterbegin', `<li>${employee}</li>`)
}

function addNewLiOnClick() {
  let submit = document.querySelector('input[type="submit"]')
  submit.addEventListener('click', function () {
    addNewElementAsLi()
    document.querySelector('input').value = ''
  })
}

function clearEmployeeListOnLinkClick() {
  let link = document.querySelector('a')
  let ul = document.querySelector('ul')
  link.addEventListener('click', function () {
    ul.innerHTML = ''
  })
}