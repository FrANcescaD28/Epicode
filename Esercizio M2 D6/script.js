// ES.7
function cambiaTitolo() {
    const h1 = document.querySelector('h1');
    h1.textContent = 'Smartphone';
}

// ES.8
function cambiaColoreSfondo() {
    document.body.style.backgroundColor = 'blue';
}

// ES.9
function cambiaIndirizzo() {
    const indirizzo = document.querySelector('footer p:nth-child(2)');
    indirizzo.textContent = 'Via Cagliari, 45 - 56789 Roma';
}

// ES.10
function aggiungiClasseLinkAmazon() {
    const linkAmazon = document.querySelectorAll('table a');
    linkAmazon.forEach(link => {
        link.classList.add('amazon-link');
    });
}

// ES.11
function modificaVisibilitaImmagini() {
    const immagini = document.querySelectorAll('table img');
    immagini.forEach(img => {
        img.classList.toggle('hidden');
    });
}

// ES.12
function cambiaColorePrezzo() {
    const prezzi = document.querySelectorAll('table td:nth-child(5)');
    prezzi.forEach(prezzo => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        prezzo.style.color = randomColor;
    });
}