function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.getElementsByClassName('input_value')[0].value
}

function addNewElementAsLi() {
  let list =  document.getElementsByClassName("employee-list")[0]
  let info = retrieveEmployeeInformation()
  let li = document.createElement("li")
  if (info !== "") {
    li.innerHTML = info
    list.append(li)
  }
}

function addNewLiOnClick() {
  let input = document.querySelector('input[type="submit"]')
  input.addEventListener("click", function (event) {
    addNewElementAsLi()
    document.getElementsByClassName('input_value')[0].value = ""
  })
}

function clearEmployeeListOnLinkClick() {
  let link = document.querySelector('a')
  link.addEventListener("click", function (event) {
    let list =  document.getElementsByClassName("employee-list")[0]
    list.innerHTML = ""
  })
}
