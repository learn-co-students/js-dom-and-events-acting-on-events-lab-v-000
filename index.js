function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit();

function retrieveEmployeeInformation() {
  let aule = $('input');
  let melko = aule[0].value;
  return melko;
}

function addNewElementAsLi() {
  let aule = $('ul.employee-list');
  aule.append($('<li>').text(retrieveEmployeeInformation()));
  let a = $('input');
  let melko = a[0].value;
  a[0].value = '';
}

function addNewLiOnClick() {
  let btn = $('input')[1];
  btn.addEventListener('click', addNewElementAsLi());
}
let i=0;

function clearEmpLst() {
  if (i!=0) {
    let aule = $('ul.employee-list');
    aule.empty();
  }
}

function clearEmployeeListOnLinkClick() {
  let lnk = $('a')[0];

  lnk.addEventListener('click', clearEmpLst);
  i++;
}
