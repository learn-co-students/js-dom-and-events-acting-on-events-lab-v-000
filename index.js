function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

const input = document.querySelector("input");

function retrieveEmployeeInformation() {
  return input.value;
}

function addNewElementAsLi() {
  let element = document.createElement("li");
  let name = retrieveEmployeeInformation();
  element.innerHTML = name;
  return document.querySelector(".employee-list").appendChild(element);
}
