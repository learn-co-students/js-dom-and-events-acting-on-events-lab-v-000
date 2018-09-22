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
  let element = document.getElementsByClassName('employee-list')[0];
  let li = document.createElement('li');
  let info = document.createTextNode(retrieveEmployeeInformation());
  li.appendChild(info);
  element.append(li);
}

function addNewLiOnClick() {
  document.querySelector('input[type="submit"]').addEventListener('click', addNewElementAsLi());
  document.querySelector('input[type="submit"]').addEventListener('click', function() {
    document.querySelector('input').value = '';
  });
}

function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', function() {
    document.querySelector('ul').innerHTML = '';
  });
}
