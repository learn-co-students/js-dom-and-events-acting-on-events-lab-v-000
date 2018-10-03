function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()


function retrieveEmployeeInformation() {
  return document.querySelector('input').value
}

function addNewElementAsLi() {
  let inputText = retrieveEmployeeInformation();
  document.querySelector('.employee-list').append(inputText)
}

function clearTheInputValue() {
  document.querySelector('input').value = "";
}

function addNewLiOnClick() {
  let submit = document.querySelector('input[type="submit"]');
  submit.addEventListener("click", () => {
    addNewElementAsLi()
    clearTheInputValue()
  },
  false)
}

function clearEmployeeListOnLinkClick() {
  let clearButton = document.querySelector('main a')
  clearButton.addEventListener("click", () => {
    document.querySelector('.employee-list').innerHTML = ''
  },
  false)
}
