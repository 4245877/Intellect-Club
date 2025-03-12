/* JavaScript для переключения меню */
 
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navContainer = document.querySelector('.nav-container');
  
  navToggle.addEventListener('click', function() {
    navContainer.classList.toggle('open');
    navToggle.classList.toggle('active');
  });
});
