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

function addNewLiOnClick() {
  let ele = document.querySelector('input[type="submit"]')

  ele.addEventListener('click', function(event) {
   let section = document.querySelector('ul.employee-list')
   let element = document.createElement("li");
   element.innerText = document.querySelector('input').value
   section.append(element)
   document.querySelector('input').value = ""
  } )

}

function clearEmployeeListOnLinkClick() {



      let ele = document.querySelector('a')
      let target = document.querySelector('.employee-list')
      ele.addEventListener('click', function(event) {
          let elements = target.querySelectorAll('li')
          elements[0].remove()
          elements[1].remove()
          target.remove()
  // // //   document.querySelector('.employee-list')
            target.innerText = ""
      })

}



preventRefreshOnSubmit()
