function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit();

let input;

function retrieveEmployeeInformation() {
  return input = document.querySelector('input').value;
}

function addNewElementAsLi() {

  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${input}</li>`);
}


function addNewLiOnClick(){
  let submit = document.querySelector('input[type="submit"]');

  submit.addEventListener('click', function(event){
    retrieveEmployeeInformation();
    addNewElementAsLi();

    document.querySelector('input').value = '';
  });
}

function clearEmployeeListOnLinkClick() {
  let clear = document.querySelector('a');
  clear.addEventListener('click', function(event){
    let links = document.querySelector('ul');
    links.innerHTML = '';
  })
}
