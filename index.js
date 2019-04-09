function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

function retrieveEmployeeInformation() {
    return document.querySelector('input').value;
}

function addNewElementAsLi() {
  let list = document.querySelector('.employee-list')
  let li = document.createElement('li');
  li.innerHTML = retrieveEmployeeInformation();
  list.appendChild(li);
}

function addNewLiOnClick() {
    addNewElementAsLi();
    document.querySelector('input').value = '';
}

function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', function(event){
    let ul = document.querySelector('.employee-list');
    ul.innerHTML = "";
  })
}


preventRefreshOnSubmit();
clearEmployeeListOnLinkClick();
