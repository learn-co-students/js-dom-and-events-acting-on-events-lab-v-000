function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return $("input[name=name]").val().toString()
}

function addNewElementAsLi() {
  $('ul.employee-list').append(`<li>${retrieveEmployeeInformation()}</li>`)
}

function addNewLiOnClick() {
  $('input[type=sumbit').on('click', addNewElementAsLi())
  $('input[name=name').val('')
}

function clearEmployeeListOnLinkClick() {
  $('a').text('Clear Employee List').on('click', function() {
    $('ul.employee-list').empty()
  })
}
