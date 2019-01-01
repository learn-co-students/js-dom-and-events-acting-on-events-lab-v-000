function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector("input").value;
}

function addNewElementAsLi() {
  const text = document.createTextNode(retrieveEmployeeInformation());
  const li = document.createElement("li");
  const element = li.appendChild(text);
  document.querySelector("ul.employee-list").appendChild(element);
  document.querySelector("form").reset();
}

function addNewLiOnClick() {
  document.querySelector("input[type='submit']").addEventListener("click", addNewElementAsLi);
}

function clearEmployeeListOnLinkClick() {
  document.querySelector("a").addEventListener("click", function(e) {
    document.querySelector("ul.employee-list").innerHTML = "";
  })
}
