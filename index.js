function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()


function retrieveEmployeeInformation() {
  return document.querySelector('input').value ;
}

function addNewElementAsLi() {
  let e = document.querySelector("ul")
  let li = document.createElement("li");
  // e.append(li).text( `${retrieveEmployeeInformation()}`) // e.append(`<li>${retrieveEmployeeInformation() }</li>`);
  e.append(li)
  li.append(`${retrieveEmployeeInformation()}`);
}

function addNewLiOnClick() {
  let e = addNewElementAsLi();
  document.querySelector('input').value = "";
}

function clearEmployeeListOnLinkClick() {
  let b = document.querySelector("a")
  let e = document.querySelector("ul")
  b.addEventListener('click', function(event) {
    e.innerHTML = "";
  });
}
