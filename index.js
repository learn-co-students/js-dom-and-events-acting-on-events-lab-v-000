const list = document.querySelector('ul')
const input = document.querySelector('input');
const newEmployee = document.createElement('li');
const link = document.querySelector('a')

function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return input.value;
}

function addNewElementAsLi() {
  newEmployee.innerHTML = retrieveEmployeeInformation();
  list.appendChild(newEmployee);
  input.value = ''
}

function addNewLiOnClick() {
  input.addEventListener('click', addNewElementAsLi() )
}

function clearEmployeeListOnLinkClick() {
  link.addEventListener('click', function(e) {
    list.innerHTML = ""
  });
}
