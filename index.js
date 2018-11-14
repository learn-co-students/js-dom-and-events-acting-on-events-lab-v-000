function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

// This retrieves the employee information from the input. It returns a string equal to the value in the input.
let employee = document.querySelector('input')

function retrieveEmployeeInformation(){
  return employee.value
}

// This function takes the value retrieved from the previous retrieveEmployeeInformation function and adds that string to a new list element which is appended to the ul with class "employee-list".
 function addNewElementAsLi(){
  let employeeName = retrieveEmployeeInformation()
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${employeeName}</li>`)
}
// clears input field 
 function resetInput(){
  document.querySelector('input').value = ''
}
// This retrieves the employee information from the input.
 function addNewLiOnClick(){
  let submit = document.querySelector('input[type="submit"]')
  submit.addEventListener('click', function(event){
    addNewElementAsLi()
    resetInput()
  })
}
//Deletes all li elements
 function clearEmployeeListOnLinkClick(){
  let a = document.querySelector('a')
  let ul = document.querySelector('ul')
  a.addEventListener('click', function(event){
    ul.innerHTML = ''
  })
}
