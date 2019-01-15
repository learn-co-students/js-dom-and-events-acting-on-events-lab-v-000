function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault();
    });
}

function retrieveEmployeeInformation(){
  return document.querySelector('input').value;
}

function addNewElementAsLi(){
   document.querySelector('.employee-list').innerHTML = retrieveEmployeeInformation();
}

function addNewLiOnClick(){
  document.querySelector('input[type="submit"]').addEventListener('click', function(event) {
  addNewElementAsLi();
  document.querySelector('input').value = ''});
  }

function clearEmployeeListOnLinkClick(){
  let ul = document.querySelector('ul');
  document.querySelector('a').addEventListener('click', function(event){
    ul.innerHTML = '';
  });
}




preventRefreshOnSubmit();