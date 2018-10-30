function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input[type=text]').value;
}

function addNewElementAsLi() {
  let newLi = document.createElement('li');
  let newLiText = document.createTextNode(retrieveEmployeeInformation());
  newLi.appendChild(newLiText);
  let list = document.getElementsByClassName('employee-list')[0].appendChild(newLi);
}

function addNewLiOnClick() {
  document.querySelector('input[type=submit]').addEventListener('click', addNewElementAsLi());
  document.querySelector('input[type=text]').value = '';
}

function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', function() {
    document.getElementsByClassName('employee-list')[0].innerHTML = '';
  });
}
