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
  document.querySelector('.employee-list').append(retrieveEmployeeInformation());
}

function addNewLiOnClick() {
  const button = document.querySelector('input');
  button.addEventListener('click', addNewElementAsLi());
  document.querySelector('input').value = "";
}

function clearEmployeeListOnLinkClick() {
  const link = document.querySelector('a');
  link.addEventListener('click', function(e) {
    document.querySelector('.employee-list').innerText = "";
  });
}
