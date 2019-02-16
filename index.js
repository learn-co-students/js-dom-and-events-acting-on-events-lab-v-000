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
  const employeeName = retrieveEmployeeInformation()
  const newLi = document.createElement("li")
  newLi.innerHTML = employeeName
  document.querySelector('.employee-list').append(newLi)
}

function addNewLiOnClick() {
  document.querySelector('.employee-list').addEventListener("click", addNewElementAsLi());
  document.querySelector('input').value = '';
}

function clearEmployeeListOnLinkClick() {
  const employeeList = document.querySelector('.employee-list')
  const link = document.querySelector('a')
  link.addEventListener('click', function(event) {
    employeeList.innerHTML = ''
  })
}
