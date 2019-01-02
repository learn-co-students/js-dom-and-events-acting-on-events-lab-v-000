function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

const main = $('main')
function retrieveEmployeeInformation() {
  const input = $('input')
  return input.val()
}

function addNewElementAsLi() {
  const list = $('.employee-list')
  const newLi = document.createElement('li')
  const newContent = document.createTextNode(`${retrieveEmployeeInformation()}`)
  newLi.appendChild(newContent)
  list.append(newLi)
}
// body > main > form > input[type="submit"]:nth-child(3)
function addNewLiOnClick() {
  const button = $('body main form input[type="submit"]')
  button[0].addEventListener('click', function(e) {
    addNewElementAsLi()
    $('input').val("")
  })
}

function clearEmployeeListOnLinkClick() {
  const list = $('.employee-list')
  const clearLink = $('a')
  clearLink[0].addEventListener('click', function(e) {
    list.empty()
  })
}
