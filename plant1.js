var modal = document.getElementById('id01');
//var modal1 = document.getElementById('id02');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
  modal.style.display = "none";
}

}
function func()
{
  document.getElementById('id01').style.display = "none";
}

function equal()
{
  var pass = document.getElementById('pwd').value;
  var cpass = document.getElementById('cpwd').value;
  if(pass == cpass)
  {
  document.getElementById('id02').style.display="none";
  alert('Account is created successfully');

  return false;
}
else {
  alert("Password and Confirm password must be equal ");
}
}
