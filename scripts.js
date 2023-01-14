
const deckOfCards = [];
let amountOfCards = prompt("Quantas cartas tu queres mané?")
let i = 0;
let n = 0;

while (amountOfCards != 4
    && amountOfCards != 6
    && amountOfCards != 8
    && amountOfCards != 10
    && amountOfCards != 12
    && amountOfCards != 14) {
    alert("Nunca jogaram jogo da memória seus catinguentos? Selecionem um número par entre 4 e 14!");
    amountOfCards = prompt("E agora, quantas cartas vão querer candangos?");
}

document.querySelector(".deck").innerHTML = "";

function addCards() {
    deckOfCards.push(`
        <div class="game-card" onclick="turn(this)">carta${i}
        <div class="front-face side">
            <figure><img src="images/bobrossparrot.gif" alt="game card front side"></figure>
        </div>
        <div class="side">
        <figure><img src="images/back.png" alt="game card back side"></figure>
        </div>
        </div>`);

}

function shuffle() {
    return Math.random() - 0.5;
}

function setCards() {
    document.querySelector(".deck").innerHTML = document.querySelector(".deck").innerHTML + deckOfCards[n];
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
let checker = "No cards";
function turn(card) {

    if (card.parentNode.classList.contains("token")) {
        checker = document.querySelector(".top-side figure").innerHTML;

        if (checker === card.querySelector("figure").innerHTML) {
            document.querySelector(".top-side").childNodes[1].classList.add("front-side");
            document.querySelector(".top-side").childNodes[3].classList.add("back-side");
            document.querySelector(".top-side").classList.remove("top-side");
            card.childNodes[1].classList.add("front-side");
            card.childNodes[3].classList.add("back-side");
            card.parentNode.classList.remove("token");
        } else {
            card.classList.add("top-side");
            card.childNodes[1].classList.add("front-side");
            card.childNodes[3].classList.add("back-side");
            card.parentNode.classList.remove("token");
            setTimeout(turnDown, 1000, card);
        }
    } else {
        card.classList.add("top-side");
        card.parentNode.classList.add("token");
        card.childNodes[1].classList.add("front-side");
        card.childNodes[3].classList.add("back-side");
    }

}
function turnDown(card) {
    notPair = document.querySelectorAll(".top-side");
    notPair[0].childNodes[1].classList.remove("front-side");
    notPair[0].childNodes[3].classList.remove("back-side");
    notPair[1].childNodes[1].classList.remove("front-side");
    notPair[1].childNodes[3].classList.remove("back-side");
    notPair[0].classList.remove("top-side");
    notPair[1].classList.remove("top-side");
}

/*
function turn(card) {
    card.childNodes[1].classList.toggle("frente");
    card.childNodes[3].classList.toggle("verso");
}
*/





