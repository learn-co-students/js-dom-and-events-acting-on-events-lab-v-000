function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()


function retrieveEmployeeInformation(){
  return document.querySelector('input').value
}

function addNewElementAsLi(){
  let a = retrieveEmployeeInformation();
  return document.querySelector(".employee-list").append(a);
}

function addNewLiOnClick(){
  let submit = document.querySelector('input[type="submit"]')
 
  submit.addEventListener('click', function(event) {
  alert('I was clicked!');
  document.querySelector('input').value.to = ('')
});
}