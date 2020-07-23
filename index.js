function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let input=document.querySelector("input")

function retrieveEmployeeInformation() {
  return input.value;
}

function addNewElementAsLi(){
  let employeeName=retrieveEmployeeInformation();
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${employeeName}</li>`)
}

function addNewLiOnClick(){
  let submit=document.querySelector('input[type="submit"]');
  submit.addEventListener("click", function(e) {
    addNewElementAsLi();
    resetInput();
  })
}

function clearEmployeeListOnLinkClick(){
  let myLi=document.querySelector("a");
  let myUl=document.querySelector("ul");
  myLi.addEventListener("click", function(e) {
    myUl.innerHTML='';
  })
}

function resetInput(){
  document.querySelector('input').value = '';
}
