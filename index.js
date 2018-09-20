function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}
preventRefreshOnSubmit()
// This retrieves the employee information from the input.
function retrieveEmployeeInformation() {
  // It returns a string equal to the value in the input.
  return document.querySelector('input').value;
}
// Moved out of function to global for reuse
const el = document.querySelector('ul');
// This function takes the value retrieved from the previous
// retrieveEmployeeInformation function and adds that string to a new list
// element which is appended to the ul with class "employee-list".
function addNewElementAsLi() {
  // https://learn.co/tracks/full-stack-web-development-v6/javascript/dom-and-events/creating-and-inserting-dom-nodes
  const li = document.createElement('li');
  li.innerHTML = retrieveEmployeeInformation();
  el.appendChild(li);
}
// This retrieves the employee information from the input.
function addNewLiOnClick() {
  document.querySelectorAll('form input')[1].addEventListener('click', function(){
    addNewElementAsLi();
    document.querySelector('input').value = '';
  });
}
// This retrieves the employee information from the input.
function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', function() {
    // https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
    el.innerHTML = '';
  });
}
