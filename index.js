function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation(){
  return document.querySelector('input').value
}

function addNewElementAsLi(){
  document.querySelector('ul.employee-list').append(retrieveEmployeeInformation());
}

function addNewLiOnClick(){
  document.querySelector('input[type= "submit"]').click(addNewElementAsLi())
  document.querySelector('input').value = ''
}

function clearEmployeeListOnLinkClick(){
  document.querySelector('a').addEventListener('click', function(event){
    document.querySelector('ul').innerHTML = ''
  })
}