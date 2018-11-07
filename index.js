function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()



let input = document.querySelector('input');

function retrieveEmployeeInformation() {
  return input.value;
};


function addNewElementAsLi() {
  let employeeName = retrieveEmployeeInformation()
  let li = document.createElement('li');
  li.innerHTML = employeeName;
  document.querySelector(".employee-list").appendChild(li);
  // Code above results in the name in a list and then a blank li item
  // The solution code also results in a list item and then a blank li item
  // document.querySelector('.employee-list').append(li).innerHTMl;
  // Code in line 24 creates a name per list with no blank li items, but fails test.
  // input field does not clear, and clear employee list does not work.
};


function addNewLiOnClick() {
  let submit = document.querySelector('input[type="submit"]')
  submit.addEventListener("click", function(e){
    addNewElementAsLi()
    input.value = "";
  })
};



function clearEmployeeListOnLinkClick() {
  let link = document.querySelector('a');
  let ul = document.querySelector('ul');

  link.addEventListener("click", function(e) {
    ul.innerHTML = ""
  })
};
