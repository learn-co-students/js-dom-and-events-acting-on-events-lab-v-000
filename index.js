function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()


// retrieveEmployeeInformation(): This retrieves the employee information from the input.
// It returns a string equal to the value in the input.
const input = document.querySelector('input');

function retrieveEmployeeInformation(){
  return input.value
}

// addNewElementAsLi(): This function takes the value retrieved from the previous
//  retrieveEmployeeInformation function and adds that string to a new list element which is appended
//  to the ul with class "employee-list".

 function addNewElementAsLi(){
   let employee = retrieveEmployeeInformation()

  document.querySelector(".employee-list").innerHTML +=(`<li>${employee}</li>`);

}

function addNewLiOnClick(){
  let submit = document.querySelector('input[type="submit"]')

  // document.querySelector("a").on("click", function(){
  //   addNewElementAsLi()
  // })
  submit.addEventListener("click", function() {
    addNewElementAsLi()
    document.querySelector('input').value = ''

  })
}

// clearEmployeeListOnLinkClick(): This empties out the employee list when "Clear employee list" button
// clicked.

function clearEmployeeListOnLinkClick(){
  let ul = document.querySelector('ul')
  let button = document.querySelector('a')

  button.addEventListener("click", function() {
    document.querySelector('ul').innerHTML = ''
  })
//     $("a").on("click", function() {
//       document.querySelector(".employee-list").remove();
// })
}
