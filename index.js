function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('#employee-name').value; 
}

function addNewElementAsLi() {
  let employeeList = document.querySelector("#employee-list"); 
  let element = document.createElement('li'); 
  element.innerHTML = retrieveEmployeeInformation(); 

  employeeList.appendChild(element); 

  document.querySelector('#employee-name').value = ""; 

}

function addNewLiOnClick() {
  const button = document.querySelector('#button');

  button.addEventListener('click', addNewElementAsLi);
}

function clearEmployeeListOnLinkClick() {
  const button = document.querySelector('#clear');

/*   function clearList() {

    let employeeList = document.querySelector("#employee-list"); 
    let child = employeeList.lastElementChild; 
 
     while (child) { 
        employeeList.removeChild(child); 
        child = employeeList.lastElementChild; 
    }  
  }
  button.addEventListener('click', clearList()); */

  button.addEventListener('click', function() {
    let employeeList = document.querySelector("#employee-list"); 
    employeeList.innerHTML = ""; 
  });

}