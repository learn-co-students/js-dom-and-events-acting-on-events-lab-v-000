function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit();


let input = document.querySelector('input');

function retrieveEmployeeInformation() {
  return input.value;
}


let list = document.querySelector('.employee-list')

function addNewElementAsLi() {
  let name = retrieveEmployeeInformation();
  list.innerHTML += `<li>${name}</li>`
}


function addNewLiOnClick() {
  let newLi = document.querySelector('input[type="submit"]')
  newLi.addEventListener('click', function(event) {
  addNewElementAsLi();
  document.querySelector('input').value = ''
  })
}


function clearEmployeeListOnLinkClick() {
  let clearList = document.querySelector('a');
  clearList.addEventListener('click', function(event) {
  list.innerHTML = ''
  })
}
