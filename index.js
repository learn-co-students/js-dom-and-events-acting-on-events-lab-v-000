function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()



function retrieveEmployeeInformation(){
  return document.querySelector('input').value;
}

function addNewElementAsLi() {
 const element = document.createElement('li');
 element.innerText = retrieveEmployeeInformation();
 return document.querySelector('.employee-list').appendChild(element);
}


function addNewLiOnClick() {
  return document.querySelector('input[type="submit"]').addEventListener("click", function(){
    addNewElementAsLi();
    document.querySelector('input[type="text"]').value = '';
  });
}




function clearEmployeeListOnLinkClick() {
  return document.querySelector('a').addEventListener('click', function(){
    document.querySelector('.employee-list').innerHTML = '';
  });
}
