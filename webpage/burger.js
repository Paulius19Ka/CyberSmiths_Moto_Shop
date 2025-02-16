//Burgerio funkcionalumas
document.addEventListener('DOMContentLoaded', () => {
    const burgerButton = document.querySelector('.mygtukas');
    const navMenu = document.querySelector('header nav');

    burgerButton.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
});