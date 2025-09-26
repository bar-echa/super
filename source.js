
  const toggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  toggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    toggle.classList.toggle('active');
  });

  // Optional: hide menu when a link is clicked
  const navLinks = document.querySelectorAll('#nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      toggle.classList.remove('active');
    });
  });


  document.querySelectorAll('.project-item').forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault(); // prevent default link behavior
    const url = this.getAttribute('href'); // ✅ use actual href
    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = url; // ✅ this now works correctly
    }, 800);
  });
});
