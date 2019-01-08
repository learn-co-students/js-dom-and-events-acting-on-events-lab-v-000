function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation(input) {
  return document.querySelector('input').value;
}

function addNewElementAsLi() {
  let employee = retrieveEmployeeInformation();
  let employeeList = document.querySelector('.employee-list');
  let li = document.createElement('li');
  li.innerHTML = employee;
  employeeList.appendChild(li);
}

function addNewLiOnClick() {
  const input = document.querySelector('input[type="submit"]');
  input.addEventListener('click', function(e) {
    addNewElementAsLi(e);
    document.querySelector('input[type="text"]').value = '';
  });
}

function clearEmployeeListOnLinkClick() {
  const employeeListButton = document.querySelector('a');
  const employeeList = document.querySelector('.employee-list')
  employeeListButton.addEventListener('click', function(event) {
    employeeList.innerHTML = '';
  });
}
