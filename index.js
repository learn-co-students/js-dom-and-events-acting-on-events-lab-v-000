function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  // return $(':input').val();
  return document.querySelector('form').querySelector('input').value;
}

function addNewElementAsLi() {
  let li = document.createElement('li');
  li.innerHTML = retrieveEmployeeInformation();
  document.querySelector('.employee-list').appendChild(li)
}

function addNewLiOnClick() {
  document.querySelector('form').addEventListener('submit', addNewElementAsLi());
  document.querySelector('input').value = ''
}

function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener("click", function() {
    document.querySelector('ul').innerHTML = '';
  });

}
