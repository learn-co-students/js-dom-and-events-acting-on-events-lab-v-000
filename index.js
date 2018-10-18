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
  let li = document.createElement('li');
  let txt = document.createTextNode(retrieveEmployeeInformation());
  li.appendChild(txt);

  return document.querySelector('ul.employee-list').append(li);
}

function addNewLiOnClick() {
  let submit = document.querySelector('input[type="submit"]')
  submit.addEventListener('click', function() {
    addNewElementAsLi();
    document.querySelector('input').value = '';
  });
}

function clearEmployeeListOnLinkClick() {
  let clear = document.querySelector('a');

  clear.addEventListener('click', function(event) {
    document.querySelector('ul').innerHTML = ''
  });
}
