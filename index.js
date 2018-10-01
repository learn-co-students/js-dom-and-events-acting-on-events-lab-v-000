function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation(){
    return document.querySelector('input[name="name"]').value;
}
const einput = document.querySelector('eform');
let emp = einput.addEventListener('submit',retrieveEmployeeInformation);


function addNewElementAsLi(){
  let newemp = document.createElement('li').innerHTML = ;
  return document.querySelector('ul.employee-list').appendChild(newemp);
}
