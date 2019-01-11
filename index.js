function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let input = document.querySelector('input')

function retrieveEmployeeInformation() {
  return input.value
}

function addNewElementAsLi() {
  let element = retrieveEmployeeInformation()

  document.querySelector('.employee-list').append(element)
}

function addNewLiOnClick() {
  document.querySelector('input[type="submit"]').addEventListener('click', addNewElementAsLi())

  input.value = ''
}

function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', function(event) {
    document.querySelector('ul').innerHTML = ''
  })
}
