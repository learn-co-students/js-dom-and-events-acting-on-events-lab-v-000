function preventRefreshOnSubmit() {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
    let employeeName = document.querySelector('input').value;
    return employeeName;
}

function addNewElementAsLi() {
    let findUl = document.querySelector('ul.employee-list');
    let createLi = document.createElement("li");
    let employeeName = retrieveEmployeeInformation();

    createLi.appendChild(document.createTextNode(`${employeeName}`));
    findUl.appendChild(createLi);
}

function addNewLiOnClick() {
    let submit = document.querySelector('input[type="submit"]');
    let input = document.querySelector('input[name="name"]');

    submit.addEventListener('click', function(event) {
        addNewElementAsLi();
        input.value = '';
    });

}

function clearEmployeeListOnLinkClick() {
    let clearLink = document.querySelector('a');
    let findUl = document.querySelector('ul.employee-list');

    clearLink.addEventListener('click', function(event) {
        while (findUl.firstChild) {
            findUl.removeChild(findUl.firstChild)
        }
    })
}