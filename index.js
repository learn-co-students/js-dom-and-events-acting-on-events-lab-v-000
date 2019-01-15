function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
}

function addNewElementAsLi() {
  var newLi = document.createElement('li')
  newLi.innerHTML = retrieveEmployeeInformation()
  document.querySelector('.employee-list').appendChild(newLi)
}

function addNewLiOnClick() {
  let addEmployeeClick = document.querySelector('input[type="submit"]');
  addEmployeeClick.addEventListener('click', addNewElementAsLi());
  document.querySelector('input').value = "";
}

function clearEmployeeListOnLinkClick() {
  let clearList = document.querySelector('a');
  clearList.addEventListener('click', function(e) {
    document.querySelector('.employee-list').innerHTML = ""
  })
}
