function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation(){
  return document.querySelector('input').value;
}

function addNewElementAsLi(){
    let employeeInput = retrieveEmployeeInformation();
    document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${employeeInput}</li>`)
}


function addNewLiOnClick(){
  let submit = document.querySelector('input[type="submit"]');
  submit.addEventListener('click', function(e){
    addNewElementAsLi();
    document.querySelector('input').value = '';
  })
}

function clearEmployeeListOnLinkClick(){
  let link = document.querySelector('a');
  let ul = document.querySelector('ul');
  link.addEventListener('click', function(e){
    ul.innerHTML = '';
  })
}
