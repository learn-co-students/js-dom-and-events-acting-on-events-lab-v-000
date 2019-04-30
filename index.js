function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

 function retrieveEmployeeInformation() {
   return document.getElementsByTagName("input")[0].value;
 }


function addNewElementAsLi(){
  let lastLi = document.querySelector(".employee-list");
  let node = document.createElement("LI");
  let textnode = document.createTextNode(retrieveEmployeeInformation());
  node.appendChild(textnode);
  lastLi.appendChild(node)
}

function addNewLiOnClick() {
  let ev = document.getElementsByTagName("input")[1]
  addEventListener("click", addNewElementAsLi());
  retrieveEmployeeInformation().reset()
}

function clearEmployeeListOnLinkClick(){
  let list =
}
// addNewElementAsLi(): This function takes the value retrieved from the previous retrieveEmployeeInformation
// function and adds that string to a new list element which is appended to the ul with class "employee-list".
//
// addNewLiOnClick(): This adds the employee name as an li element on click and clears the input value.
//
// clearEmployeeListOnLinkClick(): This empties out the employee list when "Clear employee list" button clicked.
