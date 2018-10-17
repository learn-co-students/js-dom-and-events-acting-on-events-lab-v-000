function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()


function retrieveEmployeeInformation(event){
  document.querySelector('form').addEventListener('submit', function(event){
    console.log(event.target)
  })
}

function addNewElementAsLi(){
  return $("ul.employee-list").append(retrieveEmployeeInformation())
}

function addNewLiOnClick(){

}
