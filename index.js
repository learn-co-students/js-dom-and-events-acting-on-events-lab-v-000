function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let input = document.querySelector(`input`)
 function retrieveEmployeeInformation(){
  return input.value
};
 function addNewElementAsLi(){
  let newEl = document.createElement('li')
  newEl.innerHTML = retrieveEmployeeInformation()
  document.querySelector('.employee-list').append(newEl)
};
 function addNewLiOnClick(){
  const submit = document.querySelector(`input[type = 'submit']`)
  submit.addEventListener(`click`, function(e){
    addNewElementAsLi()
    input.value = ''
  })
};
 function clearEmployeeListOnLinkClick(){
  const link = document.querySelector(`a`)
  const ul = document.querySelector('ul')
  link.addEventListener(`click`, function(e){
    ul.innerHTML = ''
  })
}
