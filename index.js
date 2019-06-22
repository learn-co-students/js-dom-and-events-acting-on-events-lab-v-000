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
  //console.log(retrieveEmployeeInformation())
  document.querySelector('.employee-list').append(retrieveEmployeeInformation())
}

function addNewLiOnClick() {
  //Defining a listener for our button, specifically, an click handler
  document.querySelector("#button").addEventListener("click", function(e) {
    //adds the employee name as an li element
    addNewElementAsLi()
    //clears the input value.
    document.querySelector("#nameInput").value = ""
  })
}

function clearEmployeeListOnLinkClick() {
//empties out the employee list when "Clear employee list" button clicked.
  document.querySelector("#clearLink").addEventListener("click", function(e) {
  document.querySelector(".employee-list").innerHTML = ""
  })
}
