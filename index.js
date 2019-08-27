function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.getElementsByTagName("input")[0].value
}

function addNewElementAsLi() {
  let liItem = retrieveEmployeeInformation();
  $('.employee-list').append('<li>' + liItem + '</li>');
  $('#name').val('');
}

document.getElementsByTagName("input")[1].addEventListener("click", addNewLiOnClick);

function addNewLiOnClick() {
   addNewElementAsLi()
}

document.getElementsByTagName("a")[0].addEventListener("click", clearEmployeeListOnLinkClick);


function clearEmployeeListOnLinkClick() {
  $('.employee-list').empty();
}