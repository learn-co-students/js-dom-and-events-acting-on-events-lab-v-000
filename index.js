function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return $('input').val();
}

function addNewElementAsLi() {
  const li = document.createElement('li');
  li.innerHTML = retrieveEmployeeInformation();
  document.getElementsByClassName("employee-list")[0].appendChild(li);
}

function addNewLiOnClick() {
  document.querySelector("form").addEventListener("submit", addNewElementAsLi());
  $('input').val("");
}

function clearEmployeeListOnLinkClick() {
  document.querySelector("main a").addEventListener("click", function(e) {
    $('ul.employee-list').empty();
  });
}
