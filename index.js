function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input').value
}

function addNewElementAsLi() {
  let ul = document.querySelector('.employee-list')
  let li = document.createElement('li')
  li.innerHTML = retrieveEmployeeInformation();
  ul.appendChild(li)
}

function addNewLiOnClick() {
  let press = document.querySelector('input[type="submit"]');
  press.addEventListener('click', function(e) {
   addNewElementAsLi();
   document.querySelector('input').value = ''
  })
}

function clearEmployeeListOnLinkClick() {
  let link = document.querySelector('a');
  let ul = document.querySelector('ul')
  link.addEventListener('click', function(e) {
  ul.innerHTML = ""
  })
}




// clearEmployeeListOnLinkClick(): This empties out the employee list when "Clear employee list" button clicked.