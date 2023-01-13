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
    deckOfCards.push(`<div class="game-card bottom-side" onclick="turn(this)">carta${i}</div>`)

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

let card;
let checker = "No cards"
function turn(card) {

    if (card.parentNode.classList.contains("token")) {
        checker = document.querySelector(".top-side").innerHTML;

        if (checker === card.innerHTML) {
            document.querySelector(".top-side").classList.add("selected-correctly");
            document.querySelector(".top-side").classList.remove("top-side");
            card.classList.add("selected-correctly");
            card.parentNode.classList.remove("token");
        } else {
            card.classList.add("top-side");
            card.parentNode.classList.remove("token");
            setTimeout(turnDown, 1000, card);
        }
    } else {
        card.classList.add("top-side")
        card.parentNode.classList.add("token");
    }

}
function turnDown(card) {
    notPair = document.querySelectorAll(".top-side");
    notPair[0].classList.remove("top-side");
    notPair[1].classList.remove("top-side");
}









