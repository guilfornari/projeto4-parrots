const deckOfCards = [];
const amountOfCards = prompt("Quantas cartas tu que mané?");
let i = 0;
let n = 0;

document.querySelector(".deck").innerHTML = "";

function addCards() {
    deckOfCards.push(`<div>carta${i}</div>`)
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








