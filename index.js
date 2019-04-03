function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
     event.preventDefault()
   })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.getElementsByTagName("input")[0].value;
}

function addNewElementAsLi() {
  let ul = document.querySelector(".employee-list");
  let li = document.createElement("li")
    ul.appendChild(li).innerHTML = retrieveEmployeeInformation();
}

function addNewLiOnClick() {
  let input = document.getElementsByTagName("input")[0];
  if (input.value !== "") {
    document.body.addEventListener('click', function(e) {
      addNewElementAsLi()
      input.value = "";
    });
  }
}

function clearEmployeeListOnLinkClick() {
  let link = document.querySelector("main a")
  link.addEventListener('click', function(e) {
    let ul = document.querySelector("main ul")
    ul.innerHTML = "";
  });
}
