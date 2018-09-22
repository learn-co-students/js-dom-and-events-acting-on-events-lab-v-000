function preventRefreshOnSubmit() {
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
  });
}

function retrieveEmployeeInformation() {
  return document.querySelector('input[name="name"]').value;
}

function addNewElementAsLi() {
  let listElement = `${retrieveEmployeeInformation()}`;
  document.querySelector("ul.employee-list").append(listElement);
}

function addNewLiOnClick() {
  document
    .querySelector('input[type="submit"]')
    .addEventListener("click", function(event) {
      addNewElementAsLi();
      document.querySelector('input[name="name"]').value = "";
    });
}

function clearEmployeeListOnLinkClick() {
  let link = document.querySelector("a");
  let ul = document.querySelector("ul");
  link.addEventListener("click", function(event) {
    ul.innerHTML = "";
  });
}

preventRefreshOnSubmit();
