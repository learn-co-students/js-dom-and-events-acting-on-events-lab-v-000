function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  const info = document.querySelector("input[type='text']");
  return info.value;
}

function addNewElementAsLi() {
  document.querySelector("ul.employee-list").append(`${retrieveEmployeeInformation()}`);
}

function addNewLiOnClick() {
  let sub = document.querySelector("input[type='submit']");
  sub.addEventListener('click', function(e) {
    addNewElementAsLi();
    document.querySelector("input[type='text']").value = "";
  });
}

function clearEmployeeListOnLinkClick() {
  document.querySelector("a").addEventListener('click', function(e) {
    document.querySelector('ul').innerHTML = '';
  });
}
