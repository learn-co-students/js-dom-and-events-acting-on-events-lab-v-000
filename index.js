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

const ul = document.querySelector('ul.employee-list')

function addNewElementAsLi(){

    let employeeName = retrieveEmployeeInformation()
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${employeeName}</li>`)
}

function addNewLiOnClick(){
  const submit = document.querySelector('input[type="submit"]')
    submit.addEventListener('click', function(event){
    addNewElementAsLi(), resetEmployee();
  });
}

function clearEmployeeListOnLinkClick(){
  let ul= document.querySelector('ul')
  let button = document.querySelector('a')
  button.addEventListener('click', function(event){
      return ul.innerHTML = ''
  })
}

function resetEmployee(){
  document.querySelector('input').value = ""
}
