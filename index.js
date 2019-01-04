function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

document.addEventListener('submit', retrieveEmployeeInformation);

function retrieveEmployeeInformation() {
  return document.getElementsByName("name")[0].value;
}

function addNewElementAsLi() {
  let name = retrieveEmployeeInformation();
  $('ul').append('<li>'+name+'</li>');
}

function addNewLiOnClick() {
  retrieveEmployeeInformation();
  addNewElementAsLi();
  $('form').each(function() {
    this.reset();
  });
}

function clearEmployeeListOnLinkClick() {
  document.getElementsByTagName('a')[0].addEventListener('click', function() {
    $('ul').empty();
  });
}
