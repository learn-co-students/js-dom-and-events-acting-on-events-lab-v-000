function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation(){
    return document.querySelector('input').value;
  }


function addNewElementAsLi(){
  let info = retrieveEmployeeInformation();
  let element = document.createElement('li');
  element.innerHTML = info;
  document.querySelector('.employee-list').appendChild(element);
}

function addNewLiOnClick(){
  document.querySelector('body > main > form > input[type="submit"]:nth-child(3)').addEventListener('click', function(e){
    addNewElementAsLi();
    document.querySelector('body > main > form > input[type="text"]:nth-child(2)').value = "";
  });
}

function clearEmployeeListOnLinkClick(){
  document.querySelector('body > main > a').addEventListener('click', function(){
    document.querySelector('ul').innerHTML = '';
  })
}