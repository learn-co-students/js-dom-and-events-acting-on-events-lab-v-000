function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let input= document.querySelector("input")

function retrieveEmployeeInformation() {
  return input.value
}

function addNewElementAsLi() {
  let value = retrieveEmployeeInformation()
  document.querySelector(".employee-list").append(value)
}

function addNewLiOnClick() {
  let thisValue = document.querySelector('input[type="submit"]')
  thisValue.addEventListener('click', function(event) {
    addNewElementAsLi()
    input.value = ""
    }
  )
}

function clearEmployeeListOnLinkClick() {
  let employeeButton = document.querySelector("a")
  let employeeList = document.querySelector("ul")
  employeeButton.addEventListener('click', function(event) {
    employeeList.innerHTML = ""
  }
)
}
