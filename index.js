function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let input = document.querySelector('input')

function retrieveEmployeeInformation(){
  return input.value
}

function addNewElementAsLi() {
  let returnedEmp = retrieveEmployeeInformation()
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${returnedEmp}</li>`)
  // JQuery lets you pass the variable here: "<li>${returnedEmp}</li>". And the lis repeat themselves
  // for all the instances in retrieveEmployeeInformation!
}

function addNewElementAsLi(){
  let employeeName = retrieveEmployeeInformation()
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${employeeName}</li>`)
}

  // couldn't piggyback off addNewElementAsLi
  function addNewLiOnClick(){
    let newEmp = document.querySelector('input[type="submit"]')
    newEmp.addEventListener('click', function(event) {
    addNewElementAsLi()
    resetInput()
    })
  }

// is event a builtin item? ??? is resentInput like that?

// const main = document.getElementById('main');
 
// main.addEventListener('click', function(event) {
//   alert('I was clicked!');
// });

function clearEmployeeListOnLinkClick () {
  let aNode = document.querySelector('main a');
  aNode.addEventListener('click', function(event) {
    let ulNode = document.getElementsByClassName("employee-list");
    while (ulNode.firstChild) {
      ulNode.removeChild(ulNode.firstChild);
    }
  })
}

function resetInput () {
  document.querySelector('input').value = ''
}



// function addNewLiOnClick(){
//   let submit = document.querySelector('input[type="submit"]')
//   submit.addEventListener('click', function(event){
//     addNewElementAsLi()
//     resetInput()
//   })
