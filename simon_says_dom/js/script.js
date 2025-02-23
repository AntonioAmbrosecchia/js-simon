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
document.getElementById("numbers-list").innerHTML = numeriCasuali.join("--")


//Creo l'interfaccia del countdown
let tempo = 30;
let countdownEl = document.getElementById("countdown");
let hiddenEl = document.getElementById("answers-form");
countdownEl.innerText = "Tempo restante: " + tempo;

//Rendo funzionante il countdown e faccio apparire gli input con i numeri da isnerire
let timer = setInterval(() => {
    tempo--;
    countdownEl.innerText = "Tempo restante: " + tempo;

    if (tempo === 0) {
        clearInterval(timer);
        document.getElementById("answers-form").className = "d-block";
        document.getElementById("numbers-list").innerText = "";
        document.getElementById("instructions").innerText = "";
        countdownEl.innerText = "Inserisci i numeri che ricordi";
    }
}, 50);

// Stampo i numeri immessi dall'utente e i numeri che doveva indovinare


let numeriUtente = [];
function salvaNumeri() {



    for (let i = 1; i < 5; i++) {
        let numeri = document.querySelector("input" + i).value;
        numeriUtente.push(numeri);


    }

    document.getElementById("instructions").innerText = valori.join("--");
}

document.querySelector("button").addEventListener("click", numeriUtente);



