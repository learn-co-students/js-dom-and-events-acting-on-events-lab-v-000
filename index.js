function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input[type="text"]').value
};

function addNewElementAsLi() {
  let ul = document.getElementsByClassName("employee-list")[0];
  let newEle = document.createElement("li");
  newEle.innerHTML =  retrieveEmployeeInformation().toString();
  ul.appendChild(newEle);
};

function addNewLiOnClick() {

  document.querySelector('input[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault()
    addNewElementAsLi();
    document.querySelector('input[type="text"]').value = '';
    }  )

};

function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', function() {
    let list = document.getElementsByClassName("employee-list")[0];
    list.innerHTML = ''
  })
};
