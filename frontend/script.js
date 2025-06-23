
   // MENU DÉROULANT - Gestion du toggle
  
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

   // MODE SOMBRE / CLAIR
   
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

// Traductions en 3 langues : fr, en, es
const translations = {
  fr: {
    "titre": "Application de Gestion de Budget Personnel",
    "slogan": "économisons votre argent",
    "mode.sombre": "Mode sombre",
    "lang.fr": "🇫🇷 Français",
    "lang.en": "🇬🇧 English",
    "lang.es": "🇪🇸 Español",
    "deconnexion": "Déconnexion",
    "votre.solde": "Votre solde",
    "recompense": "Récompense",
    "transfert": "Transfert",
    "carte": "Carte",
    "mon.qrcode": "Mon QRcode",
    "recharger": "Recharger",
    "vos.services": "Vos services",
    "tout.voir": "tout voir",
    "service.mobile": "Mobile",
    "service.internet": "Internet",
    "service.factures": "Factures",
    "service.electricite": "Électricité",
    "service.cinema": "Cinéma",
    "service.eau": "Facture d'eau",
    "service.bon": "Bon d'achat",
    "service.marche": "Marché",
    "derniers_destinataires": "Les derniers destinataires et services",
    "tout_voir": "Tout voir",
    "service_telephone": "Téléphone",
    "service_internet": "Internet",
    "service_electricite": "Électricité",
    "service_tv": "TV",
    "service_energie": "Énergie",
    "nav_accueil": "Accueil",
    "nav_historique": "Historique",
    "nav_recompense": "Récompense",
    "nav_profil": "Profil"
  },
  en: {
    "titre": "Personal Budget Management App",
    "slogan": "let's save your money",
    "mode.sombre": "Dark mode",
    "lang.fr": "🇫🇷 French",
    "lang.en": "🇬🇧 English",
    "lang.es": "🇪🇸 Spanish",
    "deconnexion": "Logout",
    "votre.solde": "Your balance",
    "recompense": "Reward",
    "transfert": "Transfer",
    "carte": "Card",
    "mon.qrcode": "My QR code",
    "recharger": "Reload",
    "vos.services": "Your services",
    "tout.voir": "see all",
    "service.mobile": "Mobile",
    "service.internet": "Internet",
    "service.factures": "Bills",
    "service.electricite": "Electricity",
    "service.cinema": "Cinema",
    "service.eau": "Water bill",
    "service.bon": "Voucher",
    "service.marche": "Market",
    "derniers_destinataires": "Latest recipients and services",
    "tout_voir": "See all",
    "service_telephone": "Phone",
    "service_internet": "Internet",
    "service_electricite": "Electricity",
    "service_tv": "TV",
    "service_energie": "Energy",
    "nav_accueil": "Home",
    "nav_historique": "History",
    "nav_recompense": "Reward",
    "nav_profil": "Profile"
  },
  es: {
    "titre": "Aplicación de Gestión de Presupuesto Personal",
    "slogan": "ahorremos tu dinero",
    "mode.sombre": "Modo oscuro",
    "lang.fr": "🇫🇷 Francés",
    "lang.en": "🇬🇧 Inglés",
    "lang.es": "🇪🇸 Español",
    "deconnexion": "Cerrar sesión",
    "votre.solde": "Tu saldo",
    "recompense": "Recompensa",
    "transfert": "Transferir",
    "carte": "Tarjeta",
    "mon.qrcode": "Mi código QR",
    "recharger": "Recargar",
    "vos.services": "Tus servicios",
    "tout.voir": "ver todo",
    "service.mobile": "Móvil",
    "service.internet": "Internet",
    "service.factures": "Facturas",
    "service.electricite": "Electricidad",
    "service.cinema": "Cine",
    "service.eau": "Factura de agua",
    "service.bon": "Vale de compra",
    "service.marche": "Mercado",
    "derniers_destinataires": "Últimos destinatarios y servicios",
    "tout_voir": "Ver todo",
    "service_telephone": "Teléfono",
    "service_internet": "Internet",
    "service_electricite": "Electricidad",
    "service_tv": "TV",
    "service_energie": "Energía",
    "nav_accueil": "Inicio",
    "nav_historique": "Historial",
    "nav_recompense": "Recompensa",
    "nav_profil": "Perfil"
  }
};

// Fonction pour appliquer les traductions selon la langue choisie
function appliquerTraduction(lang) {

  // Trouve tous les éléments avec un attribut data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const cle = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][cle]) {
      el.textContent = translations[lang][cle];
    }
  });
}

// Fonction pour changer la langue
function changerLangue(nouvelleLangue) {
  localStorage.setItem('langue', nouvelleLangue);
  appliquerTraduction(nouvelleLangue);

  // Met à jour le select pour refléter la langue actuelle
  const selectLang = document.getElementById('language-select');
  if (selectLang) selectLang.value = nouvelleLangue;
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  const langueStockee = localStorage.getItem('langue') || 'fr';
  appliquerTraduction(langueStockee);

  // Met à jour le select si présent
  const selectLang = document.getElementById('language-select');
  if (selectLang) {
    selectLang.value = langueStockee;
    selectLang.addEventListener('change', (e) => {
      changerLangue(e.target.value);
    });
  }
});
