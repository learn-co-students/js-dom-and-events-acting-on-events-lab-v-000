function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

const input = document.querySelector('input');

function retrieveEmployeeInformation() {
  return input.value;
}

function addNewElementAsLi() {
  var employee = document.createElement('li');
  employee.innerHTML = retrieveEmployeeInformation();
  document.querySelector('.employee-list').appendChild(employee);
}

function addNewLiOnClick() {
  var submit = document.querySelector('input[type=submit]');
  submit.addEventListener('click',function(e) {
    addNewElementAsLi();
    input.value = '';
  });
}

function clearEmployeeListOnLinkClick() {
  var clear = document.querySelector('a[href]');
  clear.addEventListener('click',function(e) {
    document.querySelector('.employee-list').innerHTML = '';
  });
}
