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
  var empname = document.createElement('LI');
  empname.innerHTML = retrieveEmployeeInformation();
  document.getElementsByClassName("employee-list")[0].appendChild(empname);
}

function addNewLiOnClick(){
  document.querySelector('form').addEventListener('submit', addNewElementAsLi());
  document.querySelector("input").value = "";
}

function clearEmployeeListOnLinkClick(){
  document.querySelector('a').addEventListener('click', function(){
    y = document.getElementsByClassName("employee-list")[0];
    while (y.firstChild) {
      y.removeChild(y.firstChild);
    }
  } )
}
