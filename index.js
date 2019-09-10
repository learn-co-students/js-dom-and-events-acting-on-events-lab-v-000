function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
    return $('#input').val();
}

function addNewElementAsLi() {
    $('.employee-list').append(retrieveEmployeeInformation())
}

function addNewLiOnClick() {
   addNewElementAsLi();
   $('#input').val("");
}

function clearEmployeeListOnLinkClick() {
  $('#clear').bind('click', function() {
      $('.employee-list')[0].innerHTML = "";
  })
}