function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()


function retrieveEmployeeInformation() {
  return document.querySelector("input[type='text']").value;
}

function addNewElementAsLi() {
  let info = retrieveEmployeeInformation();
  newLi = document.createElement('li');
  newLi.textContent = info;
  document.querySelector('.employee-list').appendChild(newLi);
}

function addNewLiOnClick() {
  let submit = document.querySelector("input[type='submit']");
  submit.addEventListener('click', function(event) {
    addNewElementAsLi();
    document.querySelector("input[type='text']").value = "";
  })
}

function clearEmployeeListOnLinkClick() {
  let list = document.querySelector('.employee-list');
  let clear = document.querySelector('a');
  clear.addEventListener('click', function(event) {
    list.textContent = "";
  })
}
