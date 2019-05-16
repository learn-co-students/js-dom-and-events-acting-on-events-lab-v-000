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
  employee = retrieveEmployeeInformation();
  let node = document.createElement('li');
  let textnode = document.createTextNode(employee);
  node.appendChild(textnode);
  document.querySelector('ul').appendChild(node);
}

function addNewLiOnClick() {
  let el = document.querySelector('input');
  let text = el.value;

  function newTextNode(text) {
    document.querySelector('input').value = '';
    let textnode = document.createTextNode(text);
    return textnode;
  }

  let node = document.createElement('li');
  el.addEventListener('click', newTextNode(text));
  let textnode = newTextNode(text);
  node.appendChild(textnode);
  document.querySelector('ul').appendChild(node);
}

function clearEmployeeListOnLinkClick() {
  let el = document.querySelector('a');

  function clearEmployeeList() {
    ul = document.querySelector('ul');
    ul.innerHTML = '';
  }
  
  el.addEventListener('click', clearEmployeeList);
}