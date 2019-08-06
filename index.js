function preventRefreshOnSubmit () {
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault();
    })
}

preventRefreshOnSubmit();

function retrieveEmployeeInformation () {
  return $('input:text').val();
}

function addNewElementAsLi () {
  let ul = $('.employee-list');
  let name = retrieveEmployeeInformation();

  ul.append(`<li>${name}</li>`);
}

function addNewLiOnClick () {
  addNewElementAsLi ();
  $('input:text').val('');
}

function clearEmployeeListOnLinkClick () {
  let link = document.querySelector('a');
  link.addEventListener('click', function () {
    $('.employee-list').empty();
  });
}
