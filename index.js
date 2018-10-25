function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(e){
      e.preventDefault()
    })
}

preventRefreshOnSubmit()

const input = document.querySelector('input')
let submit = document.querySelector('.clear')

function retrieveEmployeeInformation(){
  return input.value
}

function addNewElementAsLi(){
 const li = document.createElement('li')
 li.appendChild(document.createTextNode(input.value))
}

function addNewLiOnClick(){

}

function clearEmployeeListOnLinkClick(){
  localStorage.clear()
}
