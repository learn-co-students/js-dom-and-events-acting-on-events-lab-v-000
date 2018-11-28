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
  li.innerHTML = retrieveEmployeeInformation();
  document.querySelector('.employee-list').appendChild(li);
  document.querySelector('input').value = '';
}

function addNewLiOnClick () {
  let button = document.querySelector("[value='Add Employee']");
  button.addEventListener('click', addNewElementAsLi);
}

function clearEmployeeListOnLinkClick () {
  let link = document.querySelector("a[href='#']");
  let ul = document.querySelector('.employee-list');
  let children = ul.children;
  link.addEventListener('click', function(e) {
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  });

}
