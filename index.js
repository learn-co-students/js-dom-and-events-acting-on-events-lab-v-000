function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let input = document.querySelector('input')

const submit = document.querySelector('input[type="submit"]')

function retrieveEmployeeInformation(){
  return input.value
}

function addNewElementAsLi(){
  //Getting input from our text box
  let employeeName = retrieveEmployeeInformation()
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${employeeName}</li>`)
}

function addNewLiOnClick(){
  submit.addEventListener('click', function(event){
    addNewElementAsLi()
    document.querySelector('input').value = null
  })
}

function clearEmployeeListOnLinkClick (){
  let link = document.querySelector('a')
  let ul = document.querySelector('ul')
  link.addEventListener('click', function(event){
    ul.innerHTML = null
  })
}
