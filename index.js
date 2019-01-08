function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let input = document.querySelector('input');

function retrieveEmployeeInformation(){
  return input.value;
}

function addNewElementAsLi() {
  let el = document.createElement('li');

  el.innerHTML = retrieveEmployeeInformation();

  document.getElementsByClassName('employee-list')[0].appendChild(el);
}

function addNewLiOnClick() {
  let submit = document.querySelector('input[type="submit"]');

  submit.addEventListener('click', function(e) {
    addNewElementAsLi();
    document.querySelector('input').value = '';
  });

}

function clearEmployeeListOnLinkClick() {
  let clear = document.querySelector('a');
  let list = document.querySelector('ul');

  clear.addEventListener('click', function(event){
    list.innerHTML = '';
  })
}
