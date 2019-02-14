function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()


function retrieveEmployeeInformation() {
  let field = document.querySelector('input');
  return field.value;
}

function addNewElementAsLi() {
  let originalList = document.querySelector('ul');
  return originalList.innerHTML += retrieveEmployeeInformation();
}

function addNewLiOnClick() {
  const button = document.querySelector("input[type='submit']");
  button.addEventListener('click', function(e){
    addNewElementAsLi();
    resetInput();
  });
}

function clearEmployeeListOnLinkClick() {
  let link = document.querySelector('a')
  let ul = document.querySelector('ul')
  link.addEventListener('click', function(event){
    ul.innerHTML = ''
  })
}

function resetInput(){
  document.querySelector('input').value = ''
}
