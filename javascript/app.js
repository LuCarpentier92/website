const openMenu = () => {
    const menu = document.querySelector('.header-menu');
    console.log(menu);
    menu.classList.toggle('active');
    if (menu.classList.contains('active')) {
        document.querySelector('header .material-icons').innerHTML = "close";
    } else {
        document.querySelector('header .material-icons').innerHTML = "menu";
    }
};

function changeLanguage(lang) {
    // Met à jour tous les éléments ayant la classe 'lang'
    document.querySelectorAll('.lang').forEach(el => {
        el.innerHTML = el.getAttribute(`data-lang-${lang}`);
    });

    // Mise à jour dynamique du CV et du bouton de téléchargement
    const cvIframe = document.getElementById('cv-iframe');
    const cvDownload = document.getElementById('cv-download');

    if (cvIframe && cvDownload) { // Vérifie si les éléments existent
        if (lang === 'fr') {
            cvIframe.src = 'docs/CarpentierLucasCV_fr.pdf';
            cvDownload.href = 'docs/CarpentierLucasCV_fr.pdf';
        } else if (lang === 'en') {
            cvIframe.src = 'docs/CarpentierLucasCV_en.pdf';
            cvDownload.href = 'docs/CarpentierLucasCV_en.pdf';
        }
    }
}

// Définir la langue par défaut (optionnel)
document.addEventListener("DOMContentLoaded", () => {
    changeLanguage('fr'); // Initialisation en français
});
