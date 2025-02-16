class HeroModal{
    constructor(img, alt){
        this.img = img;
        this.alt = alt;
        return this.render();
    }
    render(){
        const modal = document.createElement('dialog');
        modal.classList.add('heroModal')
        document.body.style.overflowY = 'hidden';

        const image = document.createElement('img');
        image.setAttribute('src', `${this.img}`);
        image.setAttribute('alt', `${this.alt}`);

        const closeButton = document.createElement('button');
        closeButton.textContent = 'Uždaryti';
        closeButton.addEventListener('click', () => {
            modal.remove();
            document.body.style.overflowY  = 'scroll';
        });

        modal.append(image, closeButton);
        document.body.appendChild(modal);
        modal.showModal();
        return modal;
    }
}
export default HeroModal;