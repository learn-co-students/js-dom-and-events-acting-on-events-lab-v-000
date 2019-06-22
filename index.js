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
  //Defining a listener for our button, specifically, an onclick handler
  document.querySelector("Add Employee").onclick = function() {
    //First things first, we need our text:
    var text = document.retrieveEmployeeInformation("name").value; //.value gets input values
    //Now construct a quick list element
    var li = "<li>" + text + "</li>";
    //Now use appendChild and add it to the list!
    document.retrieveEmployeeInformation("employee-list").appendChild(li);
  }
}
