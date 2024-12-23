const openMenu = () => {
    const menu = document.querySelector('.header-menu');
    console.log(menu);
    menu.classList.toggle('active');
    if(menu.classList.contains('active')) {
        document.querySelector('header .material-icons').innerHTML="close"}
    else{
        document.querySelector('header .material-icons').innerHTML="menu"
    }

}

function changeLanguage(lang) {
    document.querySelectorAll('.lang').forEach(el => {
        el.innerHTML = el.getAttribute(`data-lang-${lang}`);
    });
}


// Définir la langue par défaut (optionnel)
document.addEventListener("DOMContentLoaded", () => {
    changeLanguage('fr'); // Initialisation en français
});
