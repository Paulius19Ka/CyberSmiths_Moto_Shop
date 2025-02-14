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

        const daugiauInfo = document.createElement('p');
        daugiauInfo.textContent = `
        Metai: ${this.metai} | Variklio tūris: ${this.variklioTuris} | Variklio galia: ${this.variklioGalia} | Spalva: ${this.spalva} | Rida: ${this.rida} km`;

        const daugiau = document.createElement('button');
        daugiau.textContent = "Daugiau";
        daugiau.addEventListener('click', () => {
        })

        cardDiv.append(foto, pavadinimas, kaina, daugiauInfo, daugiau);
        return cardDiv;
    }
}
export default Card;

//komentaras