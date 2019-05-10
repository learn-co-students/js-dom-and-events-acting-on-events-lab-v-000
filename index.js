function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

const ul = document.querySelector('.employee-list')
let input = document.querySelector('input')

function retrieveEmployeeInformation(){
  return input.value
}

function addNewElementAsLi(){
  let li = document.createElement("LI")
  li.innerHTML = retrieveEmployeeInformation()
  ul.appendChild(li)
}

function addNewLiOnClick(){
  let submit = document.querySelector('input[type="submit"]')
  submit.addEventListener('click', function(e){
    addNewElementAsLi();
    input.value = ""
  })

}


function clearEmployeeListOnLinkClick(){
    let clear = document.querySelector('a')
    clear.addEventListener('click', function(e){
      ul.innerHTML = '';
    })
}
