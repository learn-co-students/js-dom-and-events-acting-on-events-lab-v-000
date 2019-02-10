function preventRefreshOnSubmit(){
  document.querySelector('form').addEventListener('submit', function(e){
    event.preventDefault();
  });
}

preventRefreshOnSubmit();

function retrieveEmployeeInformation() {
  let value = document.querySelector('input').value;
  return value;
}

function addNewElementAsLi() {
  let value = retrieveEmployeeInformation();
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${value}</li>`);
}

function addNewLiOnClick() {
  let submit = document.querySelector('[type=submit]');
  submit.addEventListener('click', function(e){
    addNewElementAsLi();
    document.querySelector('input').value = '';
  });
}

function clearEmployeeListOnLinkClick() {
  let list = document.querySelector('.employee-list');
  let anchor = document.querySelector('a');
  anchor.addEventListener('click', function(e){
    list.innerHTML = '';
  });
}
