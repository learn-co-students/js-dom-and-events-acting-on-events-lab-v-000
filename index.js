function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input').value
}

function addNewElementAsLi() {
  const employeeList = document.querySelector('.employee-list');
  let li = document.createElement('li');
  li.innerHTML = retrieveEmployeeInformation();
  employeeList.appendChild(li);
}

function addNewLiOnClick() {
  document.querySelector('form').addEventListener('submit', addNewElementAsLi());
  document.querySelector('input').value = '';
}

function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', function(e) {
    document.querySelector('ul').innerHTML = '';
  })
}
