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
  let element = document.createElement('li');
  element.innerHTML = retrieveEmployeeInformation();

  let element2 = document.querySelector('ul.employee-list');
  element2.appendChild(element);
}

function addNewLiOnClick() {
  document.querySelector('input[type="submit"]').addEventListener('click', function(event) {
    addNewElementAsLi()
    textInput.value = "";
  })
}

function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', function(event) {
    let ul = document.querySelector('ul.employee-list');
    ul.innerHTML = '';
  })
}
