
function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()



function retrieveEmployeeInformation () {
	return document.querySelector('input').value;
}

function addNewElementAsLi() {
	document.querySelector(".employee-list").append(retrieveEmployeeInformation());
}

function addNewLiOnClick() {
	document.querySelector('input').addEventListener('click', addNewElementAsLi());
	document.querySelector('input').value = "";
}

function clearEmployeeListOnLinkClick () {
	document.querySelector("a").addEventListener('click', clearList);
}

function clearList() {
	document.querySelector(".employee-list").innerHTML = "";
}




