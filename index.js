function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input[name="name"]').value;
}

function addNewElementAsLi() {
  const employeeList = document.querySelector('ul.employee-list');
  let newEmployee = document.createElement('li');
  newEmployee.innerHTML = retrieveEmployeeInformation();
  employeeList.appendChild(newEmployee);
  document.querySelector('input[name="name"]').value = "";
}

function addNewLiOnClick() {
  document.querySelector('input[type="submit"]').addEventListener(
    'click', addNewElementAsLi
  );
}

function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', clearList);

  function clearList() {
    const emList = document.querySelector('ul.employee-list')
    while (emList.childElementCount > 0) {
      emList.removeChild(emList.childNodes[0]);
    }
  }
}