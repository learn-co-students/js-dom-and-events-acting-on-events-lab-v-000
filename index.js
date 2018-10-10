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
  let list = document.querySelector('.employee-list');
  list.append(retrieveEmployeeInformation());
}

function addNewLiOnClick() {
  let item = document.querySelector('input[type=submit]')
  item.addEventListener("click", function() {
    addNewElementAsLi();
    document.querySelector('input').value = "";
  });
}

function clearEmployeeListOnLinkClick() {
  let link = document.querySelector('a')
  link.addEventListener("click", function() {
    document.querySelector('ul').innerHTML = "";
  });
}
