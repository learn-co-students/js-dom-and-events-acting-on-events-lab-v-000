function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation(){
    return document.querySelector('input').value;
}

function addNewElementAsLi(){
  let employeeName = retrieveEmployeeInformation();
  let newEmployee = document.createElement('li');
  newEmployee.innerHTML = employeeName;
  document.querySelector('.employee-list').appendChild(newEmployee);
}

function addNewLiOnClick(){
  document.querySelectorAll('input')[1].addEventListener('click', function(event){
    addNewElementAsLi();
    document.querySelector('input').value = "";
  })
}

function clearEmployeeListOnLinkClick(){
  document.querySelector('a').addEventListener('click', function(event){
    let node = document.querySelector(".employee-list");
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  })
}
