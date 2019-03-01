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
  const li = document.createElement('li')
  const liText = document.createTextNode(retrieveEmployeeInformation());
  li.appendChild(liText);
  document.querySelector('.employee-list').appendChild(li)
}

function addNewLiOnClick() {
  document.querySelector('input[type="submit"]').addEventListener('click', function(e) {
    addNewElementAsLi();
    document.querySelector('input').value = ""
  })
}

function clearEmployeeListOnLinkClick() {

  document.querySelector('a').addEventListener('click', function() {
    const unorderedList = document.querySelector(".employee-list")

    while (unorderedList.hasChildNodes()) {
      unorderedList.removeChild(unorderedList.firstChild);
    }
  })
}
