// Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon
function myFunction() {
  let x = document.getElementById('myTopnav');
  if (x.className === 'login') {
    x.className += 'responsive';
  } else {
    x.className = 'login';
  }
}