import CardModal from "./CardModal.js";

class Card{
    constructor({nuotrauka, pavadinimas, kaina, metai, variklioTuris, variklioGalia, spalva, rida}){
        this.nuotrauka = nuotrauka;
        this.pavadinimas = pavadinimas;
        this.kaina = kaina;
        this.metai = metai;
        this.variklioTuris = variklioTuris;
        this.variklioGalia = variklioGalia;
        this.spalva = spalva;
        this.rida = rida;
    }
    render(){
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        const foto = document.createElement('img');
        foto.src = this.nuotrauka;
        foto.alt = `${this.pavadinimas} foto`;

        const pavadinimas = document.createElement('h3');
        pavadinimas.textContent = this.pavadinimas;

        const kaina = document.createElement('h2');
        kaina.textContent = `${this.kaina} eur`;

        const daugiau = document.createElement('button');
        daugiau.textContent = "Daugiau";
        daugiau.addEventListener('click', () => {
            new CardModal(this.nuotrauka, this.pavadinimas, this.kaina, this.metai, this.variklioTuris, this.variklioGalia, this.spalva, this.rida);

        })

        cardDiv.append(foto, pavadinimas, kaina, daugiau);
        return cardDiv;
    }
}
export default Card;

//komentarassss