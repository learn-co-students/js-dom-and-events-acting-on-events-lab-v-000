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
  input = retrieveEmployeeInformation()
  let li = document.createElement('li')
  li.innerHTML = input.toString()
  document.querySelector('ul').appendChild(li)
}

function addNewLiOnClick(){
  let button = document.querySelector('input[value="Add Employee"]')
  button.addEventListener("click", addNewElementAsLi());
  document.querySelector('form').reset()
}

function clearEmployeeListOnLinkClick(){
  document.querySelector('a').addEventListener("click", function(){
    let list = document.getElementsByClassName('employee-list')[0]
    // while (list.firstElementChild){
    //   list.removeChild(list.firstElementChild)
    // }
    list.innerHTML = ''
  });
}