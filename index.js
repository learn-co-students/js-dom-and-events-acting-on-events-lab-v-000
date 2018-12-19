function preventRefreshOnSubmit() {
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault()
  })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input').value
}

function addNewElementAsLi() {
  const value = retrieveEmployeeInformation();
  return $('ul.employee-list').append(`<li> ${value} </li>`)
}

function addNewLiOnClick() {
  addNewElementAsLi();
  $("input").on("click", function(event) {
    $("input").val("");
  });
}

function clearEmployeeListOnLinkClick() {
   return $('a[href="#"]').on("click", function(event) {
    $("ul.employee-list").empty();
  });
}
