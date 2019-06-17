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
  var ul = document.getElementsByClassName("employee-list");
  for (let i = 0; i < ul.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = retrieveEmployeeInformation()
    ul[i].appendChild(li);
  }
}

function addNewLiOnClick() {
  let input = document.querySelector('input[type="submit"]');
    input.addEventListener("click", () => {
      addNewElementAsLi();
      document.querySelector('input').value = ""
    });
}

function clearEmployeeListOnLinkClick() {
  let input = document.querySelector('a');
    input.addEventListener("click", () => {
      document.querySelector(".employee-list").innerHTML = "";
    });
}
