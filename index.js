function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    });
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  let input = document.querySelector('input');
  return input.value  
}

function addNewElementAsLi() {
  let newElement = retrieveEmployeeInformation();
    document.querySelector('.employee-list').insertAdjacentHTML("afterbegin", `<li>${newElement}</li>`) 
}

function addNewLiOnClick() {
  let employee = addNewElementAsLi();
  let event = document.querySelector('input[type="submit"]')
  let input = document.querySelector('input[type="text"]')
    event.addEventListener('click', function(e) {
      return `#{employee}`
    })
    input.value = ""
};

function clearEmployeeListOnLinkClick() {
  let ul = document.querySelector('ul')
  let event = document.querySelector('a')
  event.addEventListener('click', function(e) {
     ul.innerHTML = ""
  });
}


