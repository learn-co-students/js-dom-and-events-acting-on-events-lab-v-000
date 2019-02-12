function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()


function retrieveEmployeeInformation() {
  return $('input')[0].value
}

function addNewElementAsLi() {
  let newEmployee = `<li>${retrieveEmployeeInformation()}</li>`

  $('.employee-list').append(newEmployee)
}

function addNewLiOnClick() {
  $('input[type="submit"]')[0].addEventListener('click', function(e){
    addNewElementAsLi()
    $('input')[0].value = ""
  })
}

function clearEmployeeListOnLinkClick() {
  let list = $('ul.employee-list')[0]

  $('a')[0].addEventListener('click', function(e){
    while (list.firstChild) {
      list.removeChild(list.firstChild)
    }
  })
}
