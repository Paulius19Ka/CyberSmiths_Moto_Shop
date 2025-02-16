import Card from "./modules/Card.js";
import HeroModal from "./modules/HeroModal.js";

document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const container = document.querySelector('#container');

        data.motociklai.forEach(moto => {
            const motoCard = new Card(moto);
            container.appendChild(motoCard.render());
        });

        const heroPhoto = document.querySelector('#heroPhoto');
        heroPhoto.addEventListener('click', e => {
            new HeroModal(e.target.src, e.target.alt);
            // console.dir(e.target);
        })
    })
    .catch(error => console.error('Klaida', error));
});

