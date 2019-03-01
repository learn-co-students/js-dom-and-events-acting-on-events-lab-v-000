function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return $('body > main > form > input[type="text"]:nth-child(2)').attr('value');
}

function addNewElementAsLi() {
  const name = retrieveEmployeeInformation();
  const ul = $('ul.employee-list');
  ul.append(`<li>${name}</li>`);
}

function addNewLiOnClick() {
  const input = document.getElementsByTagName('input')[1];
  input.addEventListener('click', function(){
    addNewElementAsLi();
    $('body > main > form > input[type="text"]:nth-child(2)').val("");
  }
  );
}

function clearEmployeeListOnLinkClick() {
  const clear = document.getElementsByTagName('a')[0];
  clear.addEventListener('click', function(){
    $('ul.employee-list').text('');
  }
  );
}
