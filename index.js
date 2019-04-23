function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

input = document.querySelector('input');

function retrieveEmployeeInformation() {
  return input.value;
}

function addNewElementAsLi() {
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${retrieveEmployeeInformation()}</li>`);
}