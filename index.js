function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}
function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
}

function addNewElementAsLi() {
  let li = document.createElement('li')
  li.innerHTML = retrieveEmployeeInformation();
  document.querySelector('.employee-list').appendChild(li);
}

function addNewLiOnClick() {
  const main = document.querySelector('input[type="submit"]');
  main.addEventListener('click', function(e) {
    addNewElementAsLi();
    document.querySelector('input').value = "";
  });
}

function clearEmployeeListOnLinkClick() {
  const clearListElement = document.querySelector("a");
  clearListElement.addEventListener('click', function(e) {
    let list = document.querySelector('.employee-list');
    list.innerHTML="";
  });
}
preventRefreshOnSubmit()
