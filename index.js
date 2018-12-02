function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault();
    })
}

preventRefreshOnSubmit();

function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
}

function addNewElementAsLi() {
  let name = retrieveEmployeeInformation();
  document.querySelector('.employee-list').insertAdjacentHTML('beforeEnd', `<li>${name}</li>`);
}

function addNewLiOnClick() {
  let click = document.querySelector('input[type="submit"]');
  click.addEventListener('click', function(event){
    addNewElementAsLi();
    document.querySelector('input').value = '';
  });
}

function clearEmployeeListOnLinkClick() {
  let ul = document.querySelector('ul');
  let click = document.querySelector('a');
  click.addEventListener('click', function(event) { ul.innerHTML = ''; });
}
