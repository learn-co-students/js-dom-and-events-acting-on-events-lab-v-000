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
  let element = document.createElement('li')
  element.innerHTML = retrieveEmployeeInformation()
  document.querySelector('ul').appendChild(element)
}

function addNewLiOnClick() {
  const submit = document.querySelector("input[type='submit']");


  submit.addEventListener('click', function(event) {
  addNewElementAsLi();
  document.querySelector('input').value = ""
});
}

function clearEmployeeListOnLinkClick() {
  document.querySelector("a").addEventListener('click', function(event) {
    const elements = document.querySelector('ul');
    elements.innerHTML = ""

  })
}
