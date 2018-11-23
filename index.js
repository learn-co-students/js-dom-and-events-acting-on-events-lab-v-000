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
  let ul = document.querySelector('ul');
  let li = document.createElement('li');

  li.innerHTML = retrieveEmployeeInformation();

  ul.appendChild(li);
}

function addNewLiOnClick() {
  let submit = document.querySelectorAll('input')[1];
  let clear  = document.querySelectorAll('input')[0];

  submit.addEventListener('click', function(e) {
    addNewElementAsLi();
    clear.value = '';
  });
}

function clearEmployeeListOnLinkClick() {
  let clear = document.querySelector('a');
  let ul    = document.querySelector('ul.employee-list');

  clear.addEventListener('click', function(e) {
    ul.innerHTML = '';
  });
}
