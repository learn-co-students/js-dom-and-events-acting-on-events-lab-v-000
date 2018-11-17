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

function clearEmployeeListOnLinkClick () {
  let aNode = document.querySelector('a')
  let ulNode = document.querySelector('ul')
  aNode.addEventListener('click', function(event) {
    ulNode.innerHTML = ""
  })
}

// make sure to put set up code like the lets above where they go and the executable code like inside the
// callback function where it goes

function resetInput () {
  document.querySelector('input').value = ''
}