// Genero 5 numeri casuali da 1 a 50
function generaNumeri() {
    let numeri = [];
    for (let i = 0; i < 5; i++) {
        numeri.push(Math.floor(Math.random() * 50) + 1);
    }
    return numeri;
}

// Li faccio apparire in pagina
let numeriCasuali = generaNumeri();
document.getElementById("numbers-list").innerHTML = numeriCasuali.join("-");


// Creo l'interfaccia del countdown
let tempo = 30;
let countdownEl = document.getElementById("countdown");
let hiddenEl = Document.getElementById("answers-form");
countdownEl.innerText = "Tempo restante: " + tempo;

// Rendo funzionante il countdown e faccio apparire gli input con i numeri da inserire
let timer = setInterval(() => {
    tempo--
    countdownEl.innerText = "Tempo restante: " + tempo;

    if (tempo === 0) {
        clearInterval(timer);
        document.getElementById("answers-form").className = "d-block"
    }
}, 50)