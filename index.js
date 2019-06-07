function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

const input = document.querySelector("input");
const employeeList = document.querySelector(".employee-list");
const addEmployee = document.querySelector('input[type="submit"]');
const clearEmployeeList = document.querySelector("a");

function retrieveEmployeeInformation() {
  return input.value;
}

function addNewElementAsLi() {
  let element = document.createElement("li");
  let name = retrieveEmployeeInformation();
  element.innerHTML = name;
  return employeeList.appendChild(element);
}

function addNewLiOnClick() {
  addEmployee.addEventListener('click', function(event) {
    addNewElementAsLi();
    input.value = "";
  });
}

function clearEmployeeListOnLinkClick() {
  clearEmployeeList.addEventListener('click', function(event) {
    while (employeeList.firstChild) {
      employeeList.removeChild(employeeList.firstChild);
    }
  });
}
