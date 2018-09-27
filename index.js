function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()


function retrieveEmployeeInformation() {
  let info = document.querySelector('input').value;
  return info;
}


function addNewElementAsLi() {
  let x = retrieveEmployeeInformation();
  let listElement = document.createElement('li');
  listElement.innerHTML = x;
  document.querySelector('.employee-list').append(listElement);
}


function addNewLiOnClick() {
  let x = retrieveEmployeeInformation();
  let listElement = document.createElement('li');
  listElement.innerHTML = x;
  let list = document.querySelector('.employee-list');
  list.append(listElement);
  let input = document.querySelector('input');
  input.value = "";
}


function clearEmployeeListOnLinkClick() {
  let link = document.querySelector('main a');
  let ul = document.querySelector('.employee-list');

  link.addEventListener('click', function(e) {
    ul.innerHTML = '';
  });
}
