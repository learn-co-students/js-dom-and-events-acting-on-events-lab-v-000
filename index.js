function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  input = document.querySelector('input');
  return input.value;
}

function addNewElementAsLi() {
  let ul = document.querySelector('ul.employee-list');
  let newLi = document.createElement('li');
  newLi.appendChild(document.createTextNode(retrieveEmployeeInformation()))
  ul.appendChild(newLi);
}

function addNewLiOnClick() {
  const submit = document.querySelector('input[type="submit"]');

  submit.addEventListener('click', event => {
    addNewElementAsLi();
    document.querySelector('input').value = '';
  });
}

function clearEmployeeListOnLinkClick() {
  const link = document.querySelector('a');

  link.addEventListener('click', event => {
    document.querySelector('ul.employee-list').innerHTML = '';
  });
}
