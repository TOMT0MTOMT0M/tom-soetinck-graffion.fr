const loader = document.querySelector('.loader');
window.addEventListener('load', () => {
    if (sessionStorage.getItem('premierChargement') === null) {
        loader.classList.add('fondu-out');
    } else {
        loader.style.display = "none";
    }
    sessionStorage.setItem('premierChargement', 'done');
})