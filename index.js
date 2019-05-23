function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  const inputs = document.getElementsByTagName("input")
  return inputs[0].value
}

function addNewElementAsLi() {
  const ul = document.getElementsByClassName('employee-list')[0]
  const li = document.createElement('li')
  const text = document.createTextNode(retrieveEmployeeInformation())

  li.appendChild(text)
  ul.append(li)
}

function addNewLiOnClick() {
  const submit = document.getElementsByTagName("input")[1]
  const input = document.getElementsByTagName("input")[0]

  submit.addEventListener('click', function(event){
    addNewElementAsLi();
    input.value = ""
  })

}

function clearEmployeeListOnLinkClick() {
  const ul = document.getElementsByClassName('employee-list')[0]
  const clearButton = document.getElementsByTagName('a')[0]

  clearButton.addEventListener('click', function(event){
    ul.innerHTML = ""
  })
}
