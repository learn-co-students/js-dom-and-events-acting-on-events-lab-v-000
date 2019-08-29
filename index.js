function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  const einfo = document.querySelector('input').value;
  return einfo;
}

function addNewElementAsLi() {
  const ul = $('ul.employee-list');
  const li = document.createElement('li');
  li.innerHTML = retrieveEmployeeInformation();
  ul.append(li);
}

function addNewLiOnClick() {
  const submit = $('input')[1];
  submit.addEventListener('click', function(e) {
    addNewElementAsLi();
    document.querySelector('input').value = "";
  })
}

function clearEmployeeListOnLinkClick() {
  const list = $('ul.employee-list')[0];
  const link = $('a')[0];
  link.addEventListener('click', function(e) {
    e.preventDefault;
    list.innerHTML = '';
  })
}
