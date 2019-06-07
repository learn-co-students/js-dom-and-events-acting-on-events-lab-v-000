function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation(){
  return document.querySelector('input').value;
}

function addNewElementAsLi(){
  const name = retrieveEmployeeInformation();
  const list = document.querySelector('.employee-list');
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(name));
  list.appendChild(li);
  document.querySelector('input[type="text"]').value = "";
}

function addNewLiOnClick(){
  const submit = document.querySelector('input[type="submit"]');
  submit.addEventListener("click", addNewElementAsLi);
}

function clearEmployeeListOnLinkClick(){
  const link = document.querySelector('a');
  const list = document.querySelector('.employee-list');
  link.addEventListener("click", function(event){
    list.innerHTML = "";
  });
}