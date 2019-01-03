function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

document.addEventListener('submit', retrieveEmployeeInformation);

document.addEventListener('click', clearEmployeeListOnLinkClick);

function retrieveEmployeeInformation() {
  return document.getElementsByName("name")[0].value;
}

function addNewElementAsLi() {
  let name = retrieveEmployeeInformation();
  $('ul').append('<li>' + name + '</li>');
}

function addNewLiOnClick() {
  retrieveEmployeeInformation();
  addNewElementAsLi();
  $('form').each(function() {
    this.reset();
  });
}

function clearEmployeeListOnLinkClick() {
  $("ul").empty();
}
