function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault();
    });
}

preventRefreshOnSubmit();

function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
}

function addNewElementAsLi() {
  let ele = document.createElement('li');
  ele.innerHTML = retrieveEmployeeInformation();
  let list = document.querySelector('.employee-list');
  list.append(ele);
}

let input = document.querySelector('input');

function addNewLiOnClick() {
  let submit = document.querySelector("input[type= 'submit'");
  submit.addEventListener('click', function(e) {
    addNewElementAsLi();
    input.value = '';
  });
}

function clearEmployeeListOnLinkClick() {
  let link = document.querySelector('a');
  let ul = document.querySelector('ul');
  link.addEventListener('click', function(e) {
    ul.innerHTML = '';
  });
}


