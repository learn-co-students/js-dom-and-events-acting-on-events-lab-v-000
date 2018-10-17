function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let input = document.querySelector('input')

function retrieveEmployeeInformation(){
  console.log(input.value)
  return input.value
}

function addNewElementAsLi(){
   $("ul.employee-list").append(retrieveEmployeeInformation())
}

function resetInput(){
  input.value = ''
}

function addNewLiOnClick(){
  let submit = document.querySelector('#submit_button')
  submit.addEventListener('click', function(){
    addNewElementAsLi()
    resetInput()
  })
}

function clearEmployeeListOnLinkClick(){
  let clear = document.querySelector('#clear')
  clear.addEventListener('click', function(){
    let ul = document.querySelector('ul')
    ul.innerHTML = ''
  })

}
