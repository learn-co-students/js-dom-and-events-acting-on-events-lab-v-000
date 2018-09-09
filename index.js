function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let input = document.querySelector('input')

function retrieveEmployeeInformation(){
  return input.value
}

function addNewElementAsLi(){
  let employee = retrieveEmployeeInformation()
  return document.querySelector('ul').append(employee)
}

function addNewLiOnClick(){
  let employee = document.querySelector('input[type="submit"]')
  employee.addEventListener('click', function(e){
    addNewElementAsLi(e)
    resetInput()
  })
}

function resetInput(){
   return document.querySelector('input').value = ''
}

function clearEmployeeListOnLinkClick(){
  let clear = document.querySelector('a')
  clear.addEventListener('click', function(e){
    document.querySelector('ul').innerText = ''
  })
}
