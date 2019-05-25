function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}


function retrieveEmployeeInformation(){
  let myInput = document.querySelector('input').value;
  return myInput;
}

function addNewElementAsLi(){
  let myList = document.querySelector('.employee-list');
  let li = document.createElement("li");

  li.appendChild(document.createTextNode(retrieveEmployeeInformation()));
  myList.appendChild(li);
}

function addNewLiOnClick(){
  let adder = document.querySelectorAll("input[value='Add Employee']");
  adder.onclick = addNewElementAsLi();
  document.querySelector('input').value = "";
}

function clearEmployeeListOnLinkClick(){
  let links = document.getElementsByTagName('a');
  let myList = document.querySelector('.employee-list');
  links[0].onclick = function(){
    myList.innerHTML = "";
  };
}

preventRefreshOnSubmit();

// http://67.205.182.198:48550
