function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()



let input = document.querySelector('input');

function retrieveEmployeeInformation() {
  return input.value;
};


function addNewElementAsLi() {
  let employeeName = retrieveEmployeeInformation()
  let li = document.createElement('li');
  li.innerHTML = employeeName;
  document.querySelector(".employee-list").appendChild(li);
};


function addNewLiOnClick() {
  let submit = document.querySelector('input[type="submit"]')
  submit.addEventListener("click", function(e){
    addNewElementAsLi()
    input.value = "";
  })
};



function clearEmployeeListOnLinkClick() {
  let link = document.querySelector('a');
  let ul = document.querySelector('ul');

  link.addEventListener("click", function(e) {
    ul.innerHTML = ""
  })
};
