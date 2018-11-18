function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()
const input = document.querySelector('input')
function retrieveEmployeeInformation(){
  return document.getElementsByName("name")[0].value
}



function addNewElementAsLi(){
  let name = retrieveEmployeeInformation()
  return document.querySelector('.employee-list').append(`<li>${name}</li>`)
}

function addNewLiOnClick(){
  let name = retrieveEmployeeInformation()
  let complete = document.querySelector('.employee-list').append(`<li>${name}</li>`)
  input.value = ""
  return complete
}

function clearEmployeeListOnLinkClick(){
  let link = document.querySelector('a')
  let list = document.querySelector('ul')
  link.addEventListener('click', function(e){
    list.innerHTML = ""
  })
}
