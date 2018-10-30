function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let x = document.querySelector('input')

function retrieveEmployeeInformation() {
  return x.value
}

function addNewElementAsLi() {
  let x = retrieveEmployeeInformation();
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${x}</li>`)
}

function clearInput() {
  document.querySelector('input').value = ""
}

function addNewLiOnClick() {
  const main = document.querySelector('input[type="submit"]');
  main.addEventListener('click', function(event) {
    addNewElementAsLi();
    clearInput();
  });
}

function clearEmployeeListOnLinkClick() {
  const main = document.querySelector('a');
  const ul = document.querySelector('ul');
  main.addEventListener('click', function(event){
    ul.innerHTML = ""
  });
}
