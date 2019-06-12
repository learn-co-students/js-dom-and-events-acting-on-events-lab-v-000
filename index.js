function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  const employeeInfo = document.querySelector('input').value;
  return employeeInfo;
};

function addNewElementAsLi() {
  let employeeToAdd = retrieveEmployeeInformation();
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${employeeToAdd}</li>`);
};

function addNewLiOnClick() {
  const submit = document.querySelector('input[type="submit"]');
  submit.addEventListener('click', function(e) {
    addNewElementAsLi();
    document.querySelector('input').value = '';
  })
};

function clearEmployeeListOnLinkClick() {
  let link = document.querySelector('a');
  link.addEventListener('click', function(e) {
    document.querySelector('.employee-list').innerHTML = '';
  })
};
