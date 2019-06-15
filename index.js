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
  let newElement = retrieveEmployeeInformation()
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${retrieveEmployeeInformation()}</li>`);
}

function addNewLiOnClick() {
  let submit = document.querySelector('input[type="submit"]')
  submit.addEventListener("click", function() {
    addNewElementAsLi()
    resetInput()
  })
}

function clearEmployeeListOnLinkClick(){
  let link = document.querySelector('a')
  let ul = document.querySelector('ul')
  link.addEventListener('click', function(){
    ul.innerHTML = ''
  })
}

function resetInput(){
  document.querySelector('input').value = ''
}
