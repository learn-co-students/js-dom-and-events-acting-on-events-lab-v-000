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
  const ul = document.querySelector('ul.employee-list');
  const li = document.createElement('li');

  li.innerHTML = retrieveEmployeeInformation();
  ul.appendChild(li);
}

function addNewLiOnClick() {
  const submit = document.querySelector('input[type="submit"]')
  submit.addEventListener('click', () => {
    addNewElementAsLi();
    document.querySelector('input').value = "";
  });
}

function clearEmployeeListOnLinkClick() {
  const ul = document.querySelector('ul.employee-list');
  const button = document.querySelector('a');
  button.addEventListener('click', () => {
    ul.innerHTML = "";
  })
}
