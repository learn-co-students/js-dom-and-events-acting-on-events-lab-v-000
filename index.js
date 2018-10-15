function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let info = document.querySelector('input')

function retrieveEmployeeInformation() {
  return info.value;
}

function addNewElementAsLi() {
  let name = retrieveEmployeeInformation()
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${name}</li>`)
}

function addNewLiOnClick(){
  let submit = document.querySelector('input[type="submit"]')
  submit.addEventListener('click', function(event){
    addNewElementAsLi()
    info.value = ''
  })
}

function clearEmployeeListOnLinkClick() {
  let linkClick = document.querySelector('a');
  let ul = document.querySelector('ul');
  linkClick.addEventListener('click', function(event){
    ul.innerHTML = ''
  })
}
