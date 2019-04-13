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
  const ul = document.querySelector('.employee-list')
  let li = document.createElement('li')
  li.appendChild(document.createTextNode(`${retrieveEmployeeInformation()}`));
  ul.appendChild(li);
}

function addNewLiOnClick() {
  let submit = document.querySelector('input[type="submit"]')
  submit.addEventListener('click', function () {
    addNewElementAsLi()
    document.querySelector('input').value = ""
  })
}

function clearEmployeeListOnLinkClick() {
  link = document.querySelector('a')
  link.addEventListener('click', function () {
    const ul = document.querySelector('.employee-list')
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  })
}
