function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}
preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
    return document.getElementsByName('name')[0].value
}

function addNewElementAsLi() {
  let ul = document.getElementsByClassName('employee-list')[0];
  let li = document.createElement('li');
  li.innerHTML = retrieveEmployeeInformation();
  ul.appendChild(li);
}

function addNewLiOnClick() {
  document.querySelector('form').addEventListener('submit', addNewElementAsLi())
  document.getElementsByName('name')[0].value = '';
}

function clearEmployeeList() {
  let ul = document.getElementsByClassName('employee-list')[0];
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild)
  }
}

function clearEmployeeListOnLinkClick() {
  document.getElementById('clear-list').addEventListener('click', clearEmployeeList)
}