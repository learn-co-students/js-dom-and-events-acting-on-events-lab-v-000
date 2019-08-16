function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation () {
  return $('form input')[0].value;
}

function addNewElementAsLi () {
  let employeeLi = document.createElement('li')
  employeeLi.innerHTML = retrieveEmployeeInformation();
  $('.employee-list').append(employeeLi);
  $('form input')[0].value = '';
}

function addNewLiOnClick () {
  $('form input')[1].addEventListener('click', addNewElementAsLi );
}

function clearEmployeeListOnLinkClick () {
  $('a[href="#"]')[0].addEventListener('click', function () {
      $('.employee-list li').remove();
      $('.employee-list')[0].innerHTML = '';
  });
}
