function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}
//https://dzone.com/articles/debug-javascript-using-chrome-developer-tools
//https://developers.google.com/web/tools/chrome-devtools/javascript/
preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector("input[type=text]").value
  // debugger;
}
//https://stackoverflow.com/questions/4010356/form-validation-get-all-input-type-text-and-validate
//https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascripts

function addNewElementAsLi() {
  const employee = retrieveEmployeeInformation()
  // debugger;
  console.log(employee)
  const employeeList = document.querySelector('ul.employee-list')
  const listItem = document.createElement('li');
  employeeList.appendChild(listItem).innerHTML = employee;
}
//https://www.digitalocean.com/community/tutorials/how-to-make-changes-to-the-dom
//how to create a list item in javascript
//https://stackoverflow.com/questions/17773938/add-a-list-item-through-javascript
//http://jsfiddle.net/Gmyag/

function addNewLiOnClick(){
  const submitButton = document.querySelector('input[type="submit"]')
  submitButton.addEventListener('click', function(event){
    addNewElementAsLi();
    // debugger;
    document.querySelector('input[type="text"]').value = ''
    // debugger;
  })
}

function clearEmployeeListOnLinkClick(){
  const employeeList = document.querySelector('ul.employee-list')
  const clearEmployeeLink = document.querySelector('a')
  clearEmployeeLink.addEventListener('click', function(event){
    employeeList.innerHTML = ''
  })
}
//https://www.digitalocean.com/community/tutorials/how-to-make-changes-to-the-dom
