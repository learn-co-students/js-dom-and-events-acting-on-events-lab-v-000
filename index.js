function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){

      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input').value
}

function addNewElementAsLi() {
  let li = document.createElement("li")
  li.innerHTML = `${retrieveEmployeeInformation()}`
  return document.querySelector('.employee-list').append(li)
}

function addNewLiOnClick() {
  document.querySelector('form').addEventListener('click', function(e){
    e.preventDefault()
     addNewElementAsLi()
     document.querySelector('input').value = ''
  })

}

function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', function(e){
    e.preventDefault()
    document.querySelector('.employee-list').innerHTML = ''
  })
}
