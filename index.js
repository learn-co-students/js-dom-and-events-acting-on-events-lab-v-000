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
  //  make sure to find. the tag of what you looking for in your listener before i
  //  adding an event  listener on it. 
  
    p.addEventListener('click',function(){

    document.querySelector('.employee-list').innerText = ""

       })
      }
