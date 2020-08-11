function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.getElementsByTagName("input")[0].value;
}

function addNewElementAsLi() {
  let newElement = document.createElement("li");
  newElement.innerHTML = retrieveEmployeeInformation();
  ul = document.getElementsByClassName("employee-list")[0];
  ul.append(newElement);
}

// function addNewLiOnClick(){
//   let submit = document.querySelector('input[type="submit"]')
//   submit.addEventListener('click', function(event){
//     addNewElementAsLi()
//     resetInput()
//   })
// }

function clearInput() {
  document.getElementsByTagName("input")[0].value = '';
}
function addNewLiOnClick() {
  document.getElementsByTagName("input")[1].addEventListener('click', addNewElementAsLi);
  document.getElementsByTagName("input")[1].addEventListener('click', clearInput);
  }

function removeLi(){
  let liList = document.querySelectorAll("ul.employee-list li");
  for (let i=0; i<liList.length; i++){
    liList[i].remove;
  }
}
function clearEmployeeListOnLinkClick() {
  document.getElementsByTagName("a")[0].addEventListener('click', removeLi)
}

// function clearEmployeeListOnLinkClick(){
//   let link = document.querySelector('a')
//   let ul = document.querySelector('ul')
//   link.addEventListener('click', function(event){
//     ul.innerHTML = ''
//   })
// }
