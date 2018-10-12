function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation(){
  // this doesn't work bc you haven't loaded jQuery
  // return $('input').value;
  return document.querySelector('input').value;
}

function addNewElementAsLi(){
  let valueToAdd = retrieveEmployeeInformation();
  return document.querySelector('ul.employee-list').append(valueToAdd);
}

function addNewLiOnClick(){
  // need a listener that invokes addNewElementAsLi() when submit button is clicked
  document.querySelector('input[type="submit"]').addEventListener("click", function (event){
    addNewElementAsLi();
    resetInput();
  });
}

function resetInput(){
  document.querySelector('input').value = ''
}

function clearEmployeeListOnLinkClick(){
  // wipe out the list items that have been added to the ul element so far
  // listen for click on the only link 
  document.querySelector('a').addEventListener("click", function (event){
    document.querySelector('ul').innerHTML = '';
  });
}