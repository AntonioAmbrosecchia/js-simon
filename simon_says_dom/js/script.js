function generaNumeri() {
    let numeri = [];
    for (let i = 0; i < 5; i++) {
        numeri.push(Math.floor(Math.random() * 5) + 1);
    }
    return numeri;
}

let numeriCasuali = generaNumeri();
document.getElementById("numbers-list").innerHTML = numeriCasuali.join("-");