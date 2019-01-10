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
 document.querySelector('.employee-list').insertAdjacentHTML('beforeend',
   `<li>${retrieveEmployeeInformation()}</li>`)
}

function addNewLiOnClick(){
  let element = document.querySelector('input[type="submit"]')
  element.addEventListener('click',function(e){
      // e.stopPropagation()
      addNewElementAsLi()
      document.querySelector('input').value = ''
  })
}

function clearEmployeeListOnLinkClick(){
  let link = document.querySelector('a')
  link.addEventListener('click', function(e){
    document.querySelector('ul').innerHTML = ''
  })
}
