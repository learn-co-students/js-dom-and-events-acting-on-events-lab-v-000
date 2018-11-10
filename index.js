function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input').value              //grab input element & return its value
}

function addNewElementAsLi() {
  let li = document.createElement('li')                      //create new li element
  li.innerHTML = retrieveEmployeeInformation()              //set value of li to equal return value of function above
  document.querySelector('.employee-list').appendChild(li)   //select the employee-list class & append the new li element to it
}

function addNewLiOnClick() {
  let input = document.querySelector("input[type='submit']")  //grab input type submit & set variable to it
  input.addEventListener('click', function(e) {               //add event listener to that variable & listen for click
    addNewElementAsLi()                                        //when clicked, call addNewElementAsLi function
    document.querySelector('input').value = ''                 //grab the input value & clear it
  })
}

function clearEmployeeListOnLinkClick() {
  let link = document.querySelector('a')                  //grab 'a' tag element & set variable to it
  let list = document.querySelector('ul')                 //grab ul element & set variable to it
  link.addEventListener('click', function(e) {            //add event listener to a tag variable & listen for click
  list.innerHTML = ''                                     //clear innerHTML of the ul variable
  })
}
