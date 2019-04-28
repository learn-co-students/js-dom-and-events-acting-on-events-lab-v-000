function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault();
    });
}

preventRefreshOnSubmit();

 

function retrieveEmployeeInformation(){
  return document.querySelector('input[name="name"]').value
}

function addNewElementAsLi(){
  let node = document.createElement("LI")
  node.innerHTML = retrieveEmployeeInformation();
  document.querySelector('.employee-list').appendChild(node);
}


function addNewLiOnClick(){
  let submit = document.querySelector('input[type="submit"]');
  submit.addEventListener('click', function(event){
    addNewElementAsLi();
    resetInput();
  });
}
      


function clearEmployeeListOnLinkClick(){
  let link = document.querySelector('a')
  let ul = document.querySelector('ul')
  link.addEventListener('click', function(event){
    ul.innerHTML = ''
  });
}

function resetInput(){
  document.querySelector('input').value = ''
}

// With JQUERY

/*

function clearFormField() {
  document.getElementById('myform').reset();
}

function retrieveEmployeeInformation(input){
  let employee = document.querySelector('input').value
  return employee;
}

 function addNewElementAsLi(){
  let node = document.createElement("LI")
  node.innerHTML = retrieveEmployeeInformation()
  $('ul.employee-list').append(node);
}


 function addNewLiOnClick(event){
  let submit = $('input')[1];
  submit.addEventListener('click', event => {
    addNewElementAsLi();
    resetInput();
  })
}

function clearEmployeeListOnLinkClick() {
  let link = $('a')[0];
  link.addEventListener('click', event => { 
  let list = $('ul')[0];
  list.innerHTML = '';
  });
}

function resetInput(){
  document.querySelector('input').value = ''
}

*/
