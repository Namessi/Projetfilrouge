/* ===========================
   MENU DÉROULANT - Gestion du toggle
   =========================== */
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const dropdownMenu = document.getElementById('dropdown-menu');

  // Fonction pour ouvrir/fermer le menu
  function toggleMenu() {
    dropdownMenu.classList.toggle('d-none');
  }

  // Ouvrir/fermer menu au clic sur le bouton hamburger
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // empêche la propagation pour ne pas fermer immédiatement
    toggleMenu();
  });

  // Fermer le menu si on clique ailleurs sur la page
  document.addEventListener('click', (e) => {
    if (!dropdownMenu.classList.contains('d-none') && !dropdownMenu.contains(e.target)) {
      dropdownMenu.classList.add('d-none');
    }
  });

  // Empêcher la fermeture si on clique dans le menu lui-même
  dropdownMenu.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});
/* ===========================
   MODE SOMBRE / CLAIR
   =========================== */
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // Charger le thème enregistré (si existant)
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i> Mode clair';
  } else {
    themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i> Mode sombre';
  }

  themeToggleBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
      themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i> Mode sombre';
    } else {
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
      themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i> Mode clair';
    }
  });
});
