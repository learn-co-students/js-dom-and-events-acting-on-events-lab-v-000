function preventRefreshOnSubmit() {
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let input = document.querySelector("input");

function retrieveEmployeeInformation() {
  return input.value;
};

function addNewElementAsLi() {
  let name = retrieveEmployeeInformation()
  document.querySelector(".employee-list").innerHTML +=(`<li>${name}</li>`);
};

function addNewLiOnClick() {
  submit = document.querySelector('input[type="submit"]')
  submit.addEventListener("click", function(){
    addNewElementAsLi()
    document.querySelector("input").value = '';
  });
};

function clearEmployeeListOnLinkClick() {
  let ul = document.querySelector('ul');
  let link = document.querySelector('a')

  link.addEventListener("click", function() {
    ul.innerHTML = "";
  });
};
