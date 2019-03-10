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
  let element = document.createElement('li');
  let li = document.querySelector('.employee-list').appendChild(element);
  li.innerHTML = retrieveEmployeeInformation();
}

function addNewLiOnClick() {
  let form = document.querySelector('form');
  form.addEventListener('click', function(event) {
    addNewElementAsLi();
    document.querySelector('input').value = '';
  });
}

function clearEmployeeListOnLinkClick() {
  let link = document.querySelector('a');
  let ul = document.querySelector('ul');
  link.addEventListener('click', function(event) {
    ul.innerHTML = '';
  });
}
