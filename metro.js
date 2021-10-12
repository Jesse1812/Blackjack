let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = " " + count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}

function warning() {
  document.getElementById("error").textContent =
    "Something went wrong, please try again";
}

let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let sumel = document.getElementById("sum-el");

function add() {
  let result = num1 + num2;
  sumel.textContent = "Sum: " + result;
}
function substract() {
  let result = num1 - num2;
  sumel.textContent = "Sum: " + result;
}
function multiply() {
  let result = num1 * num2;
  sumel.textContent = "Sum: " + result;
}
function divide() {
  let result = num1 / num2;
  sumel.textContent = "Sum: " + result;
}

let player = {
  name: "Jesse",
  credit: 135,
};
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl2 = document.getElementById("sum-el2");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": " + "$" + player.credit;

function getRandomCard() {
  let result = Math.floor(Math.random() * 13) + 1;
  if (result === 1) {
    return 11;
  } else if (result > 10) {
    return 10;
  } else {
    return result;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl2.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Vous voulez rejouer?";
  } else if (sum === 21) {
    message = "Blackjack !";
    hasBlackJack = true;
  } else {
    message = "Vous avez perdu";
    isAlive = false;
  }
  messageEl.textContent = message;
}
function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
