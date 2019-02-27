function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault();
    });
}

preventRefreshOnSubmit()

let input = document.querySelector('input');

function retrieveEmployeeInformation() {
  return input.value;
}

function addNewElementAsLi() {
  let employee = retrieveEmployeeInformation();
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${employee}</li>`);
}

function addNewLiOnClick() {
  let click = document.querySelector('input[type="submit"]');
  click.addEventListener('click', function(event){
    addNewElementAsLi();
    resetInput()
  });
}

function clearEmployeeListOnLinkClick(){
  let url = document.querySelector('a')
  let list = document.querySelector('ul')
  url.addEventListener('click', function(event){
    list.innerHTML = ''
  })
}

function resetInput(){
  document.querySelector('input').value = ''
}
