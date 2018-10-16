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
  return document.querySelector('ul').append(retrieveEmployeeInformation());
}

function addNewLiOnClick() {
  document.addEventListener('click', function(e) {
    addNewElementAsLi()
    document.querySelector('input').value = ""
  })
}

function clearEmployeeListOnLinkClick() {
  let ul = document.querySelector('ul')
  let anchorTag = document.querySelector('a')
  anchorTag.addEventListener('click', function(e){
    ul.innerHTML = ""
  })
}
