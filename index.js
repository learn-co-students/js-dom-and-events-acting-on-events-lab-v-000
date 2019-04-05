function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

function retrieveEmployeeInformation() {
  return 'Bob'
}


function addNewElementAsLi() {
  let section = document.querySelector('ul.employee-list')
  let element = document.createElement("li");
  element.innerText = 'Bob'
  section.append(element)
}

addNewLiOnClick() {
  let ele = document.querySelector('input[type="submit"]')

  ele.addEventListener('click', function(event) {
    let section = document.querySelector('ul.employee-list')
    let element = document.createElement("li");
    element.innerText = 'Bob'
    section.append(element)
  } )


}




preventRefreshOnSubmit()
