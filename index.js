function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit();

function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
}

function addNewElementAsLi () {
  $( ".employee-list" ).append(retrieveEmployeeInformation());
  document.querySelector('input').value = "";

}

function addNewLiOnClick () {
    const submit = document.querySelector('input[type="submit"]');
    submit.addEventListener('click', function(event) {
      addNewElementAsLi()
    });
}

function clearEmployeeListOnLinkClick () {
  let ul = document.querySelector('ul');
  let button = document.querySelector('a');
  button.addEventListener('click', function(event) {
    ul.innerHTML = "";
  });
}
