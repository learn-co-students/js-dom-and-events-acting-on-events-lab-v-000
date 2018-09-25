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
  li.innerHTML = retrieveEmployeeInformation();         //or-   document.querySelector('input').value
  document.querySelector('.employee-list').appendChild(li);
}

function addNewLiOnClick() {
  const main = document.querySelector('input[type="submit"]')
  main.addEventListener('click', function(event) {
    addNewElementAsLi()
    document.querySelector('input').value = ''
  })
}

function clearEmployeeListOnLinkClick() {
  const main = document.querySelector('a')
  main.addEventListener('click', function(event) {
    let list = document.querySelector('.employee-list')
    list.innerHTML = ''
  })

}
