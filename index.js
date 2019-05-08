function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation(){
  return document.querySelector('input').value

}

function addNewElementAsLi(){
  let ul = document.querySelector('ul')
  let li = document.createElement('li');
  li.innerHTML = retrieveEmployeeInformation()
  return ul.appendChild(li);
}

function addNewLiOnClick(){
    let submit = document.querySelector('input[type="submit"]')
    return  submit.addEventListener('click', function(e) {
        addNewElementAsLi()
      document.querySelector('input').value = ''
    })
  }

function clearEmployeeListOnLinkClick(){
    let link = document.querySelector('a')
    let ul = document.querySelector('ul')
    link.addEventListener('click', function(event){
      ul.innerHTML = ''
    })
  }
