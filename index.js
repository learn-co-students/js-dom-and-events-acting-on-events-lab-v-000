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
let employee = retrieveEmployeeInformation();
$('.employee-list').append(employee);
}

function addNewLiOnClick() {
  document.querySelector('input[type="submit"]').onclick = function() {
    addNewElementAsLi();
    document.querySelector('input').value = '';
  }
};


function clearEmployeeListOnLinkClick() {
  document.querySelector('a').onclick = function() {
    $('.employee-list').empty()
  }
}
