function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

function toggleDropdown(event) {
  event.preventDefault();
  const dropdownMenu = event.target.nextElementSibling;
  dropdownMenu.classList.toggle('active');
}

// Close dropdown when clicking outside
window.addEventListener('click', (event) => {
  const dropdownMenu = document.querySelector('.user-dropdown .dropdown-menu');
  if (!event.target.closest('.user-dropdown')) {
      dropdownMenu.classList.remove('active');
  }
});

// Function to set the active class on the clicked link
function setActiveLink(event) {
  // Remove the 'active' class from all links
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    link.classList.remove('active');
  });

  // Add the 'active' class to the clicked link
  event.target.classList.add('active');
}

