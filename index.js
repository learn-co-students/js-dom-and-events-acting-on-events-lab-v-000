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
   let myNodeList = document.querySelectorAll('li');
   for (var i = 0; i < myNodeList.length; i++) {
        myNodeList[i] = '';
  }
}
