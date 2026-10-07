// Mobile Nav Toggle
document.addEventListener('DOMContentLoaded', function() {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      nav.classList.toggle('active');
      toggle.setAttribute('aria-expanded', nav.classList.contains('active'));
    });
  }

  // Dropdown toggle on mobile
  var dropdownParents = document.querySelectorAll('.nav-list > li');
  dropdownParents.forEach(function(li) {
    var link = li.querySelector('a');
    var dropdown = li.querySelector('.dropdown');
    if (dropdown && link) {
      link.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          dropdown.classList.toggle('active');
        }
      });
    }
  });

  // Close nav on outside click
  document.addEventListener('click', function(e) {
    if (nav && !nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove('active');
    }
  });
});
