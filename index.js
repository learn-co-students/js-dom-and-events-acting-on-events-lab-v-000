function preventRefreshOnSubmit(){
  document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();
  });
}

preventRefreshOnSubmit();

function retrieveEmployeeInformation() {
  const input = document.querySelector('input[type=text]');
  return input.value;
};

function addNewElementAsLi() {
  const newEmployeeLi = document.createElement('li');
  const employeeUl = document.querySelector('ul.employee-list');
  newEmployeeLi.textContent = retrieveEmployeeInformation();
  employeeUl.appendChild(newEmployeeLi);
};

function addNewLiOnClick() {
  document.querySelector('input[type=submit]').addEventListener('click', function(event) {
    addNewElementAsLi();
    (function() {document.querySelector('input[type=text]').value = ''})();
  });
};

function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', function(event) {
    const employeeUl = document.querySelector('ul.employee-list');
    while (employeeUl.firstChild) {
      employeeUl.firstChild.remove();
    };
  });
};
