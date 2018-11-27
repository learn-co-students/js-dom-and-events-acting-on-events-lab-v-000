// $(document).ready(function(){
//
//   clearEmployeeListOnLinkClick()
// })


function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

  preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
 return document.querySelector('input').value;
}

function addNewElementAsLi() {
  // retrieve the retrieveEmployeeInformation
  // grab employee List
  //append data
  var list =  document.querySelector(`.employee-list`);
  var data = retrieveEmployeeInformation();
  return list.insertAdjacentHTML(`beforeend`,`<li>${data}</li>`);
}

function addNewLiOnClick() {
  var data = addNewElementAsLi();
  var input = document.querySelector('input');
  input.value = ""
  return data;
}

 function clearEmployeeListOnLinkClick() {
   document.querySelector('a').addEventListener('click', function(event){
    event.preventDefault();
    document.querySelector('.employee-list').innerHTML = '';
    })
  }
