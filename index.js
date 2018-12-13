function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  // straight forward following of test
  return document.querySelector('input').value;
}

function addNewElementAsLi() {
  let employeeName = retrieveEmployeeInformation();

  // DRYed up into a single line using .insertAdjacentHTML. Potential hard coding problem, but
  // rewrite would be expanding scope of the function
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${employeeName}</li>`);
}

function addNewLiOnClick() {
  let click = document.querySelector('input[type="submit"]');
  // variable storing the 'click' of the submit button

  click.addEventListener("click", function (event) {
    // addEventListener for when the 'click' actually occurs

    addNewElementAsLi();
    let clear = document.querySelector('input[type="text"]');
    clear.value = '';

    // DRYing up code to use already functional code
    // while having the text of the input returned as verified blank
  });
}

function clearEmployeeListOnLinkClick() {

  // the two variable declarations below find the ul we need to clear
  let ul = document.querySelector('ul');
  let button = document.querySelector('a');

  //similarly as addNewLiOnClick() we apply a listener and alter the ul
  button.addEventListener("click", function (event) {
    ul.remove();
    ul.innerHTML='';
  });
}