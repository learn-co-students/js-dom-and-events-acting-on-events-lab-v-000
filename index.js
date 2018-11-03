  function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
}

function addNewElementAsLi() {
  let ul = document.getElementsByClassName('employee-list')[0];
  let name = document.createTextNode(retrieveEmployeeInformation());
  let newLi = document.createElement('li');

  newLi.appendChild(name);
  ul.appendChild(newLi);
}

function addNewLiOnClick() {
  let addEmployeeButton = document.querySelector('input[type="submit"]');
  let formField = document.querySelector('input[type="text"]');

  function clearForm() {
      formField.value = "";
  }

  addEmployeeButton.onclick = addNewElementAsLi(); clearForm();
}

function clearEmployeeListOnLinkClick() {
  let a = document.querySelector('main a');

  function clearUl() {
    let ul = document.querySelector('.employee-list');
    ul.innerHTML = "";
  }

  a.addEventListener("click", clearUl);
}
