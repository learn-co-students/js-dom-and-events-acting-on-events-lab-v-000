function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()
function retrieveEmployeeInformation()
{
  return document.querySelector('input').value;
}
function addNewElementAsLi()
{
  let name = retrieveEmployeeInformation();
  return document.querySelector('.employee-list').append(name);
}
function addNewLiOnClick()
{
  document.querySelector('input[type="submit"]').addEventListener('click', function()
  {
    addNewElementAsLi();
    document.querySelector('input').value = "";
  });
}
function clearEmployeeListOnLinkClick()
{
  document.querySelector('a').addEventListener('click', function()
  {
    document.querySelector('ul').innerText = ""
  });
}
