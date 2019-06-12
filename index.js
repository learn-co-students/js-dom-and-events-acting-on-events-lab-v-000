function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  let input = document.querySelector('input');
  return input.value;
}

function addNewElementAsLi() {
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${retrieveEmployeeInformation()}</li>`);
}

function addNewLiOnClick() {
  let submit = document.querySelector('input[type="submit"]')
  submit.addEventListener('click', function(event){
    addNewElementAsLi()
    resetInput()
  })
}

function resetInput(){
  document.querySelector('input').value = ''
}

function clearEmployeeListOnLinkClick() {
  let link = document.querySelector('a')
  let ul = document.querySelector('ul')
  link.addEventListener('click', function(event){
    ul.innerHTML = ''
  })
}
