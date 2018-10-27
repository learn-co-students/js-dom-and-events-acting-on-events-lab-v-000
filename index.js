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
  const input = retrieveEmployeeInformation();

  document.querySelector('.employee-list').innerHTML = input
  
}

function addNewLiOnClick(){

  let submit = document.querySelector('input[type="submit"]')
  
  submit.addEventListener('click', function(event){
    addNewElementAsLi()
    reset();
  })
  
}

function clearEmployeeListOnLinkClick() {

  let link = document.querySelector('a')
  let ul = document.querySelector('.employee-list')

  link.addEventListener('click', function(event){
    ul.innerHTML = ''
  })
}

function reset(){
  document.querySelector('input').value = '';
}