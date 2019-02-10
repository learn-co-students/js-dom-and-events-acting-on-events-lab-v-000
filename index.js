function preventRefreshOnSubmit() {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault()
    })
}

preventRefreshOnSubmit()

let input = document.querySelector('input');
let employeeList = document.querySelector('.employee-list');

function retrieveEmployeeInformation() {
    return input.value
}

function addNewElementAsLi() {
    let li = document.createElement('li');
    li.innerHTML = retrieveEmployeeInformation();
    employeeList.appendChild(li);
}

function addNewLiOnClick() {
    let submit = document.getElementById('submission')

    submit.addEventListener('click', function(e) {
        addNewElementAsLi()
        clearInput()
    })
}

function clearInput() {
    input.value = ""
}

function clearEmployeeListOnLinkClick() {
    let link = document.querySelector('a')
    let ul = document.querySelector('ul')

    link.addEventListener('click', function(e) {
        ul.innerHTML = ''
    })
}