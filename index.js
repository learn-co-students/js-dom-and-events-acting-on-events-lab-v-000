function preventRefreshOnSubmit() {
  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault()
  })
}

function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
}

function addNewElementAsLi() {
  let li = document.createElement('li');
  li.innerHTML = retrieveEmployeeInformation();
  document.querySelector('.employee-list').appendChild(li);
}

function addNewLiOnClick() {
  let submit = document.querySelector('input[type="submit"]');
  submit.addEventListener('click', addNewElementAsLi());
  document.querySelector('input').value = "";
}

function clearEmployeeListOnLinkClick() {
  let clear = document.querySelector('a');
  clear.addEventListener('click', function (e) {
    document.querySelector('.employee-list').innerHTML = ""
  })
}

preventRefreshOnSubmit()
