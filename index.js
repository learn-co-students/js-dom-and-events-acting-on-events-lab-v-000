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
  newLi = document.createElement('li');
  info = document.createTextNode(retrieveEmployeeInformation());
  newLi.appendChild(info);
  document.querySelector('ul.employee-list').appendChild(newLi);
}

function addNewLiOnClick() {
  document.querySelector('form').addEventListener('submit', addNewElementAsLi());
  document.querySelector('input').value = "";
}

function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', function(e) {
    e.stopPropagation();
    ul = document.querySelector('ul.employee-list');
    while (ul.firstChild) {
      ul.removeChild( ul.firstChild );
    }
  });
}