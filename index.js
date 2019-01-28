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
  t = retrieveEmployeeInformation()
  document.querySelector(".employee-list").append(t)
}

function addNewLiOnClick(){
  v = document.querySelector("input[type='submit']")
   v.addEventListener('click', function() {
        addNewElementAsLi()

      document.querySelector('input').value = ""

  })
}

  function clearEmployeeListOnLinkClick(){
  
  p = document.querySelector("a")
    p.addEventListener('click',function(){

    document.querySelector('.employee-list').innerText = ""

       })
      }
