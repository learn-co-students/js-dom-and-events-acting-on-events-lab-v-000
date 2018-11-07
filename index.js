function retrieveEmployeeInformation() {
  return $('input[type="text"]').val();
}

function addNewElementAsLi() {
  let container = $('.employee-list')
  let submit = $('input[type="text"]');
  let value = submit.val();
  return container.append(`<li>${value}</li>`);
}

function addNewLiOnClick() {
  let container = $('.employee-list');
  let submit = $('input[type="submit"]')[0];
  let value = $('input[type="text"]').val();
  submit.addEventListener('click', function(e) {
    container.append(`<li>${value}</li>`);
    $('input[type="text"]').val("");
  })
}

function clearEmployeeListOnLinkClick() {
  let clear = $('a[href="#"]')[0];
  let container = $('ul');
  clear.addEventListener('click', function(e) {
    container.html('');
  })
}

function preventRefreshOnSubmit(){
  document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault()
  })
}
preventRefreshOnSubmit()
