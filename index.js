function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation(){
  const input = document.querySelector('input');
  return input.value;
}

function addNewElementAsLi(){
  var employeeInfo = retrieveEmployeeInformation();
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${employeeInfo}</li>`);
  // var newLi = document.createElement('li');
  // newLi.appendChild(employeeInfo);
  // // var li = document.createElement('li');
  // // employeeInfo = li.createTextNode(li);
  // return li.appendChild('li');
}

function addNewLiOnClick(){
  const employeeName = retrieveEmployeeInformation();
  var li = document.createElement('li');
  li.textContent = employeeName;
  var submit = document.getElementsByTagName('input')[1];
  submit.addEventListener('click', function(event){
    addNewElementAsLi();
    document.getElementsByTagName('input')[0].value = '';
  });
}

function clearEmployeeListOnLinkClick(){
  var clearLink = document.getElementsByTagName('a')[0];
  clearLink.addEventListener('click', function(e){
    var allLis = document.querySelector('.employee-list');

    allLis.innerHTML = '';


//create variable of element
//create variabl for parent of element
//remove element from containing element

  // var li = document.getElementsByTagName('li');
  // var liContainer = document.getElementsByTagName('ul');
  // liContainer.className('employee-list');
  })
}
