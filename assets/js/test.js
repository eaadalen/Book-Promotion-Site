document.getElementById('dropdownToggle').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior
  var dropdownMenu = this.nextElementSibling;
  
  // Toggle the display of the dropdown
  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "block";
  }
});

// Optionally close the dropdown if clicked outside
window.addEventListener('click', function(event) {
  if (!event.target.matches('#dropdownToggle')) {
    var dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach(function(dropdown) {
      dropdown.style.display = 'none';
    });
  }
});