function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

function retrieveEmployeeInformation() {
  return $(':input').val();
}

function addNewElementAsLi() {
  let val = retrieveEmployeeInformation();
  $('ul').append($("<li>").text(val));
}

function addNewLiOnClick() {
  let val = retrieveEmployeeInformation();
  $(':submit').click(function() {
    $('ul').append($("<li>").text(val));
    $(':input').val('');
  })
}

function clearEmployeeListOnLinkClick() {
  $('a').click(function() {
    $('.employee-list').empty();
  })
}

preventRefreshOnSubmit()
