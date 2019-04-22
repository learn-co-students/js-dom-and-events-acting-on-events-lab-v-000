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
  let name = retrieveEmployeeInformation();
  let list = document.querySelector('ul.employee-list');
  let li = document.createElement("li");
  li.innerHTML = name;
  list.appendChild(li);
}

function addNewLiOnClick() {
  let submit = document.querySelector('input[type="submit"]')
  submit.addEventListener("click", function(event) {
    addNewElementAsLi();
    document.querySelector('input').value = '';
  })
}

function clearEmployeeListOnLinkClick() {
  let link = document.querySelector("a")

  link.addEventListener("click", function(event) {
    document.querySelector('ul.employee-list').innerHTML = "";
  })
}
