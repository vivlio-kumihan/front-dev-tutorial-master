document.addEventListener('DOMContentLoaded', function() {
  const body = document.querySelector('body');
  const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
  mobileMenuIcon.addEventListener('click', function() {
    body.classList.toggle('menu-open');
  });
});