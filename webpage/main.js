import Card from "./modules/Card.js";

document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const container = document.querySelector('#container');

        data.motociklai.forEach(moto => {
            const motoCard = new Card(moto);
            container.appendChild(motoCard.render());
        });
    })
    .catch(error => console.error('Klaida', error));
});

//komentaraaas

//Burgerio funkcionalumas
document.addEventListener('DOMContentLoaded', () => {
    const burgerButton = document.querySelector('.mygtukas');
    const navMenu = document.querySelector('header nav');

    burgerButton.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
});