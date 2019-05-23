function preventRefreshOnSubmit(){
  document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault()
  })
}

function addNewLiOnClick(){
  document.querySelector('input[type="submit"]').addEventListener('click', addNewLi)
}

function clearEmployeeListOnLinkClick(){
  document.querySelector('a').addEventListener('click', killList)
}

function retrieveEmployeeInformation(){
  return document.querySelector('form > input').value;
}

function addNewElementAsLi (){
let node = document.createElement('li');    
let textnode = document.createTextNode(retrieveEmployeeInformation());

node.appendChild(textnode);

let list = document.getElementsByClassName('employee-list')[0];
list.appendChild(node);

return true;
}

function addNewLi(event) {
  addNewElementAsLi();
  document.querySelector('form > input').value = '';
  return true;
}

function killList() {
  const myList = document.getElementsByClassName('employee-list')[0];
  myList.innerHTML = '';
  return true;
}

preventRefreshOnSubmit()