function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}
preventRefreshOnSubmit()


function retrieveEmployeeInformation(){
  const input = document.querySelector('input');
  return input.value;
}

function addNewElementAsLi(){
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  const info = retrieveEmployeeInformation()
  li.innerHTML = info.toString();
  ul.appendChild(li)
}

function addNewLiOnClick(){
  let button = document.querySelector('input[value="Add Employee"]')
  button.addEventListener("click", addNewElementAsLi());
  document.querySelector('form').reset()
}

function clearEmployeeListOnLinkClick(){
  document.querySelector('a').addEventListener("click", function(){
   let list = document.getElementsByClassName('employee-list')[0]
   list.innerHTML = ''
  });
}
