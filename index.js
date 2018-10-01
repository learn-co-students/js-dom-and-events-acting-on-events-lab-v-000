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
const elist = $('.employee-list')
einput.addEventListener('submit',retrieveEmployeeInformation);
einput.addEventListener('submit',addNewElementAsLi);
elist.addEventListener('click',addNewLiOnClick);


function addNewElementAsLi(){
  emp = retrieveEmployeeInformation;
  let newemp = document.createElement('li').innerHTML = emp;
  return $('ul.employee-list').append(newemp);
}

function addNewLiOnClick(){
  emp = retrieveEmployeeInformation;
  let newemp = document.createElement('li').innerHTML = emp;
  $('ul.employee-list').append(newemp);
  return document.querySelector('input[name="name"]').value = "";
}



function clearEmployeeListOnLinkClick(){
  let btn = document.querySelector('a');
  let ul = document.querySelector('ul');
  btn.addEventListener('click',function(){
    ul.innerHTML = ''
  });
}
