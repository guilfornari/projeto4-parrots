const deckOfCards = [];
let amountOfCards = prompt("Quantas cartas tu qué mané?")
let i = 0;
let n = 0;

while (amountOfCards != 4
    && amountOfCards != 6
    && amountOfCards != 8
    && amountOfCards != 10
    && amountOfCards != 12
    && amountOfCards != 14) {
    alert("Nunca jogou jogo da memória sua anta? Selecione um número par entre 4 e 14!");
    amountOfCards = prompt("E agora, quantas cartas vai querer candango?");
}

document.querySelector(".deck").innerHTML = "";

function addCards() {
    deckOfCards.push(`<div class="carta">carta${i}</div>`)
}

function shuffle() {
    return Math.random() - 0.5;
}

function setCards() {
    document.querySelector(".deck").innerHTML = document.querySelector(".deck").innerHTML + deckOfCards[n]
}


while (i < (amountOfCards / 2)) {
    addCards();
    addCards();
    i++;
}

deckOfCards.sort(shuffle);

while (n < amountOfCards) {
    setCards();
    n++;
}








