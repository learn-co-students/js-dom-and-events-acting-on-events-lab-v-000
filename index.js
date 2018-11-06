function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let input = document.querySelector('input');

function retrieveEmployeeInformation() {
  return input.value;
}

function addNewElementAsLi() {
  let list = document.querySelector('.employee-list');
  list.append(retrieveEmployeeInformation());
}

function addNewLiOnClick(){
  let input = document.querySelector('input[type="submit"]');
  input.addEventListener('click', function(e){
    addNewElementAsLi()
    document.querySelector('input').value = '';
  });
}

function clearEmployeeListOnLinkClick() {
  let link = document.querySelector('a');
  link.addEventListener('click', function(e) {
    document.querySelector('ul').innerHTML = '';
  });
}
