function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

const input = document.querySelector('input')

function retrieveEmployeeInformation() {
  return document.querySelector("input").value;
}

function addNewElementAsLi() {
  let name = retrieveEmployeeInformation();
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${name}</li>`)
}

function addNewLiOnClick() {
  let submit = document.querySelector("input[type='submit']");
  submit.addEventListener("click", function(e) { addNewElementAsLi();
    resetInput();
  }
  );
}

function clearEmployeeListOnLinkClick(){
  let link = document.querySelector('a')
  let employeeList = document.querySelector('ul')
  link.addEventListener('click', function(event){
    employeeList.innerHTML = ''
  });
} 