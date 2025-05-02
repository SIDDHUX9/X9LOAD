document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay');

  menuToggle.addEventListener('click', () => {
    const isSidebarVisible = sidebar.style.display === 'flex';
    sidebar.style.display = isSidebarVisible ? 'none' : 'flex';
    overlay.style.display = isSidebarVisible ? 'none' : 'block';
  });

  overlay.addEventListener('click', () => {
    sidebar.style.display = 'none';
    overlay.style.display = 'none';
  });
});
