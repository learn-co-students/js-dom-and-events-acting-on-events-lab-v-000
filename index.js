function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
}

function addNewElementAsLi() {
  let node = document.createElement("LI");
  let textnode = document.createTextNode(retrieveEmployeeInformation());
  node.appendChild(textnode);  
  document.querySelector(".employee-list").appendChild(node); 
}
a
function addNewLiOnClick() {
  let button = document.querySelector('input[type="submit"]');
  console.log(button)
  button.addEventListener("click", function(e) {
    addNewElementAsLi();
    document.querySelector('input').value = '';
  })
}

function clearEmployeeListOnLinkClick() {
  let list = document.querySelector(".employee-list");
  let link = document.querySelector("a");
  link.addEventListener("click", function(e) {
    list.innerHTML = "";
  })
}