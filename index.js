function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

const input = document.querySelector('input')

function retrieveEmployeeInformation(){
  return input.value;
}

const ul = document.querySelector('ul')

function addNewElementAsLi(){

    let employeeName = retrieveEmployeeInformation()
  return document.querySelector('ul.employee-list').append(employeeName)
}

function addNewLiOnClick(){
  const submit = document.querySelector('input[type="submit"]')
  submit.addEventListener('click', function(event) {
     addNewElementAsLi(), resetEmployee();
  });
}


function clearEmployeeListOnLinkClick(){

  const button = document.querySelector('a')
  button.addEventListener('click', function(e){
    return document.querySelector('ul').innerHTML = ''
  })
}

function resetEmployee(){
  document.querySelector('input').value = ""
}
