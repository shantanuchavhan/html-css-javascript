const dropdownIcon = document.querySelector('.dropdown-icon');
const dropdownMenu = document.querySelector('.dropdown-menu');


dropdownIcon.addEventListener('click', function () {
  if (dropdownMenu.style.display==="") {
    dropdownMenu.style.display='none';
    
  }
  dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
});


window.addEventListener('resize', function () {
  if (window.innerWidth > 768) {
    dropdownMenu.style.display = 'none';
  }
});