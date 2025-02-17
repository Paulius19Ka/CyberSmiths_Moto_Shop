class TosModal{
    constructor(){
        return this.render();
    }
    render(){
        const modal = document.createElement('dialog');
        modal.classList.add('tosModal')
        document.body.style.overflowY = 'hidden';

        const terms = document.createElement('p');
        terms.innerHTML = `<b>1. Bendros nuostatos</b><br>
            Naudodamiesi mūsų svetaine, sutinkate laikytis šių taisyklių ir sąlygų.<br>
            <b>2. Informacijos tikslumas</b><br>
            Mes stengiamės užtikrinti, kad visa pateikta informacija būtų tiksli, tačiau negarantuojame jos absoliutaus tikslumo ar išsamumo.<br>
            <b>3. Pirkimai ir atsakomybė</b><br>
            Įsigydami motociklus ar kitus produktus per mūsų svetainę, prisiimate atsakomybę už savo pasirinkimą ir naudojimą.<br>
            <b>4. Privatumo politika</b><br>
            Jūsų asmens duomenys yra saugomi pagal mūsų privatumo politiką ir nėra dalijami su trečiosiomis šalimis be jūsų sutikimo.<br>
            <b>5. Pakeitimai</b><br>
            CyberSmiths pasilieka teisę keisti šias sąlygas bet kuriuo metu. Atnaujinimai įsigalioja iš karto po jų paskelbimo svetainėje.`;

        const buttonWrapper = document.createElement('div');

        const agreeButton = document.createElement('button');
        agreeButton.textContent = 'Sutinku';
        agreeButton.addEventListener('click', () => {
            window.localStorage.setItem('Terms', 'agreed');
            modal.remove();
            document.body.style.overflowY  = 'scroll';
        });

        const disagreeButton = document.createElement('button');
        disagreeButton.textContent = 'Nesutinku';
        disagreeButton.addEventListener('click', () => {
            window.location.href = "./ToS.html";
        });
        buttonWrapper.append(agreeButton, disagreeButton);
        modal.append(terms, buttonWrapper);
        document.body.appendChild(modal);
        modal.showModal();
        return modal;
    }
}
export default TosModal;