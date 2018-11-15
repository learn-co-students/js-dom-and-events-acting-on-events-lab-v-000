function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let textInput = document.querySelector('input');

function retrieveEmployeeInformation() {
  return textInput.value;
}

function addNewElementAsLi() {
  let li = document.createElement('li');
  li.innerHTML = retrieveEmployeeInformation();
  let ul = document.querySelector('ul.employee-list');
  ul.appendChild(li);
}

function addNewLiOnClick() {
  document.querySelector('input[type="submit"]').addEventListener('click', function(event) {
    addNewElementAsLi();
    textInput.value = "";
  })
}


function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', function(event) {
    let ul = document.querySelector('ul.employee-list');
    ul.innerHTML = '';
  })
}
