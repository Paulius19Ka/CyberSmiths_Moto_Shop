import Card from "./modules/Card.js";
import HeroModal from "./modules/HeroModal.js";
import TosModal from "./modules/TosModal.js";



document.addEventListener('DOMContentLoaded', () => {
    if(window.localStorage.getItem('Terms') !== 'agreed'){
        new TosModal();
    }

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
        })
    })
    .catch(error => console.error('Klaida', error));
});

