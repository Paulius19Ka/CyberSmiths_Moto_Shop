import HeroModal from "./HeroModal.js";

class CardModal{
    constructor(nuotrauka, pavadinimas, kaina, metai, variklioTuris, variklioGalia, spalva, rida){
        this.nuotrauka = nuotrauka;
        this.pavadinimas = pavadinimas;
        this.kaina = kaina;
        this.metai = metai;
        this.variklioTuris = variklioTuris;
        this.variklioGalia = variklioGalia;
        this.spalva = spalva;
        this.rida = rida;
        return this.render();
    }
    render(){
        const modal = document.createElement('dialog');
        document.body.style.overflowY = 'hidden';

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('modalCard');

        const foto = document.createElement('img');
        foto.src = this.nuotrauka;
        foto.alt = `${this.pavadinimas} foto`;
        foto.classList.add('pointer');
        foto.addEventListener('click', e =>{
            new HeroModal(this.nuotrauka, this.pavadinimas);
        })

        const pavadinimas = document.createElement('h3');
        pavadinimas.textContent = this.pavadinimas;

        const kaina = document.createElement('h2');
        kaina.textContent = `${this.kaina} eur`;

        const daugiauInfo = document.createElement('p');
        daugiauInfo.innerHTML = `
        <b>Metai:</b> ${this.metai}<br><b>Variklio tūris:</b> ${this.variklioTuris}<br><b>Variklio galia:</b> ${this.variklioGalia}<br><b>Spalva:</b> ${this.spalva}<br><b>Rida:</b> ${this.rida} km`;

        const closeButton = document.createElement('button');
        closeButton.textContent = 'Uždaryti';
        closeButton.addEventListener('click', () => {
            modal.remove();
            document.body.style.overflowY  = 'scroll';
        });

        const contactForm = document.createElement('form');
        const contactLabel = document.createElement('label');
        contactLabel.setAttribute('for', 'email');
        contactLabel.textContent = 'Įveskite savo el. paštą, susisieksime!';

        const contactInput = document.createElement('input');
        contactInput.setAttribute('type', 'email');
        contactInput.setAttribute('name', 'email');
        contactInput.setAttribute('id', 'email');
        contactInput.setAttribute('placeholder', 'email@gmail.com');

        const contactSubmit = document.createElement('input');
        contactSubmit.setAttribute('type', 'submit');
        contactSubmit.setAttribute('value', 'Siųsti');
        contactSubmit.addEventListener('click', e => {
            e.preventDefault();

            cardDiv.remove();

            const confirmDiv = document.createElement('div');
            confirmDiv.classList.add('confirmModal')
            const header = document.createElement('h2');
            header.innerHTML = `Susisieksime su Jumis el. paštu:<br>${e.target.form.email.value}`;

            const closeBtn = document.createElement('input');
            closeBtn.setAttribute('type', 'submit');
            closeBtn.setAttribute('value', 'Uždaryti');
            
            closeBtn.addEventListener('click', () => {
                modal.remove();
                document.body.style.overflowY  = 'scroll';
            })
            confirmDiv.append(header, closeBtn)
            modal.append(confirmDiv);
        })

        contactForm.append(contactLabel, contactInput, contactSubmit);

        cardDiv.append(foto, pavadinimas, kaina, daugiauInfo, contactForm, closeButton);

        modal.append(cardDiv);
        document.body.appendChild(modal);
        modal.showModal();
        return modal;
    }
}
export default CardModal;