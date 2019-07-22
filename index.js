function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let input = document.querySelector('input');

function retrieveEmployeeInformation() {
  console.log("input", input)
  return input.value;
}


function addNewElementAsLi() {
 //console.log("yo", retrieveEmployeeInformation())
let employeeList = document.querySelector('.employee-list')

 let li = document.createElement('li');
  li.innerHTML = retrieveEmployeeInformation()
  employeeList.appendChild(li);
};

function addNewLiOnClick() {
  const specificSubmit = document.querySelector("input[type='submit']")
  specificSubmit.addEventListener('click', function(event){
    addNewElementAsLi();
    input.value = "";
  })
}

function clearEmployeeListOnLinkClick() {
  const link = document.querySelector('a')
  let employeeList = document.querySelector('.employee-list')
  link.addEventListener('click', function(event){
    employeeList.innerHTML = "";
  })
}
