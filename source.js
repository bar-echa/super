
  const toggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  toggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    toggle.classList.toggle('active');
  });

  
  const navLinks = document.querySelectorAll('#nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      toggle.classList.remove('active');
    });
  });


  document.querySelectorAll('.project-item').forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault(); 
    const url = this.getAttribute('href'); 
    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = url; 
    }, 800);
  });
});

