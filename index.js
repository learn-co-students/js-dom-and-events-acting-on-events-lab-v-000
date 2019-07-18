function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

// retrieveEmployeeInformation(): This retrieves the employee information from the input.
// It returns a string equal to the value in the input.


let input = document.querySelector('input')

function retrieveEmployeeInformation(){
  return input.value
}

// addNewElementAsLi(): This function takes the value retrieved from the previous
// retrieveEmployeeInformation function and adds that string to a new list element
// which is appended to the ul with class "employee-list".

function addNewElementAsLi(){
  let employeeName = retrieveEmployeeInformation()
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${employeeName}</li>`)
}

//addNewLiOnClick(): This adds the employee name as an li element on click
// and clears the input value.

function addNewLiOnClick(){
  let submit = document.querySelector('input[type="submit"]')

  submit.addEventListener('click', function(event) {
    addNewElementAsLi();
    input.value = '';
  });
}
//clearEmployeeListOnLinkClick(): This empties out the employee list when
//"Clear employee list" button clicked.

function clearEmployeeListOnLinkClick(){
  let link = document.querySelector('a')
  let list = document.querySelector('ul')

  link.addEventListener('click', function(event) {
    list.innerHTML = '';
  });
}
