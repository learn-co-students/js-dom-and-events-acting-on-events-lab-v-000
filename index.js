function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}


preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
}

function addNewElementAsLi(){
  let employeeInfo = retrieveEmployeeInformation();
  let ul = document.querySelector('.employee-list');
  let li = document.createElement('li');
  ul.append(li);
  return li.append(employeeInfo);
}

function addNewLiOnClick() {
  let submitButton = document.querySelector('input[type= submit]')
  submitButton.addEventListener('click', function(e) {
    addNewElementAsLi();
    document.querySelector('input').value = "";
  })
}

function clearEmployeeListOnLinkClick() {
  let clearLink = document.body.querySelector('a');
  clearLink.addEventListener('click', function(e) {
    document.querySelector('ul').innerHTML = "";
});
}
