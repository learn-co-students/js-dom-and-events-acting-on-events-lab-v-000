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
  newThing = retrieveEmployeeInformation()
 $('.employee-list').append(`<li>${newThing}</li>`)
}

function addNewLiOnClick(){
  let button = document.querySelector('input[type="submit"]')
  button.addEventListener('click',function(){addNewElementAsLi()
  $('input[type="text"]').val('')
  })
}

function clearEmployeeListOnLinkClick(){
  let button = document.querySelector('a')
  button.addEventListener('click',function(){addNewElementAsLi()
  $('.employee-list').empty()
  })
}
