let monCv = ["Bac D", "Maitrise AES", "Bac+2 Développement web"];
console.log(monCv[1]);
console.log(monCv[2]);
console.log(monCv[0]);

let maDescription = ["Jesse", "52", "true"];

let messages = [
  "Hey, how it's going?",
  "I'm great, thank you, how about you?",
  "All good. Been working on my portfolio lately",
];
let newMessage = "Same here";
messages.push(newMessage);
console.log(messages);

for (let i = 0; i < messages.length; i++) {
  console.log(messages[i]);
}

let cards = [7, 3, 9];
for (let i = 0; i < cards.length; i++) {
  console.log(cards[i]);
}

let sentence = ["Hello", "my name", "is", "Jesse"];
let greetingEl = document.getElementById("greeting-el");
for (let i = 0; i < sentence.length; i++) {
  greetingEl.textContent += sentence[i] + " ";
}

let player1Time = 102;
let player2Time = 110;

function totalTime() {
  return player1Time + player2Time;
}
let length = totalTime();
console.log(length);

let florred = Math.floor(Math.random() * 6) + 1;
console.log(florred);

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

let test = rollDice();
console.log(test);

let hasSolvedChallenge = false;
let hasHintsLeft = false;
if (hasSolvedChallenge === false && hasHintsLeft === false) {
  showSolution();
}

function showSolution() {
  console.log("Showing the solution");
}

let likeDocumentaries = false;
let likeStartups = false;
if (likeDocumentaries === true || likeStartups === true) {
  recommendMovies();
}
function recommendMovies() {
  console.log("Hey, check out these new films !");
}

let castle = {
  name: "Eilean Donan",
  place: "Inverness",
  size: 300,
  haunted: true,
  rooms: ["garden", "5 bedrooms", "2 vestibules", "3 donjons"],
};
console.log(castle.haunted);
console.log(castle.rooms[1]);

let person = {
  name: "Jesse",
  age: 52,
  country: "France",
};
function logData() {
  return (
    person.name +
    " is " +
    person.age +
    " years old and lives in " +
    person.country
  );
}
logData();

let age = 15;
if (age < 6) {
  console.log("free");
} else if (age < 18) {
  console.log("child discount");
} else if (age < 27) {
  console.log("student discount");
} else if (age < 67) {
  console.log("full price");
} else {
  console.log("senior citizen discount");
}

let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];
let slide = "- ";
for (i = 0; i < largeCountries.length; i++) {
  console.log(slide + largeCountries[i]);
}
largeCountries.pop();
largeCountries.push("Pakistan");
largeCountries.shift();
largeCountries.unshift("China");
for (i = 0; i < largeCountries.length; i++) {
  console.log(slide + largeCountries[i]);
}

let dayOfMonth = 28;
let weekday = "friday";
if (dayOfMonth === 13 && weekday === "friday") {
  console.log("🙊 ");
} else {
  console.log("🍖");
}

let hands = ["rock", "paper", "scissor"];
function throwAnObject() {
  let i = Math.floor(Math.random() * hands.length);
  console.log(hands[i]);
}
throwAnObject();

let fruit = ["🍎", "🔶", "🍎", "🍎", "🔶"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

function rangeFruits() {
  for (i = 0; i < fruit.length; i++) {
    if (fruit[i] === "🍎") {
      appleShelf.textContent += "🍎";
    } else if (fruit[i] === "🔶") {
      orangeShelf.textContent += "🔶";
    }
  }
}
rangeFruits();

let box = document.getElementById("box");
box.addEventListener("click", function () {
  console.log("I want to open the box!");
});

let container = document.getElementById("container");
container.innerHTML = "<button onclick='buy()'>Buy !<button>";
function buy() {
  container.innerHTML += "<p>Thank you for buying!</p>";
}

const recipient = "James";
const sender = "Jesse";
const email = `Hey ${recipient} ! 
How is it going? 
Cheers ${sender}`;

console.log(email);

const welcomeEl = document.getElementById("welcome-el");
function greetUser(greeting, name, emoji) {
  welcomeEl.textContent = `${greeting} ${name} ${emoji}`;
}
greetUser("Howdy", "Jesse", "🐶");

function add(number1, number2) {
  return number1 + number2;
}
console.log(add(3, 4));
console.log(add(9, 102));

function getFirst(array) {
  return array[0];
}
let first = getFirst([1, 5, 7]);
console.log(first);

let myCourses = ["CSS", "UI", "JS"];

function logItems(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
logItems(myCourses);

localStorage.setItem("Jesse", "150");

let data = [
  {
    player: "Jane",
    score: 52,
  },
  {
    player: "Mark",
    score: 41,
  },
];
let dataBtn = document.getElementById("data-btn");
dataBtn.addEventListener("click", function () {
  console.log(data[0].score);
});

/* function generateSentence(desc, arr) {
  for (let i = 0; i < arr.length; i++) {
    return `The ${arr.length} ${desc} are ${arr},`;
  }
} */

function generateSentence(desc, arr) {
  let basetext = `The ${arr.length} ${desc} are `;
  const last = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (i === last) {
      basetext += arr[i];
    } else {
      basetext += arr[i] + ",";
    }
  }
  return basetext;
}
generateSentence("best actresses", [
  "Jennifer lawrence",
  "Sharon Stone",
  "Asia Argento",
]);

const imgs = ["images/hip1.jpg", "images/hip2.jpg", "images/hip3.jpg"];
const container = document.getElementById("container");

function renderImg() {
  let imgDom = "";
  for (let i = 0; i < imgs.length; i++) {
    imgDom += `<img class="team-img" src="${imgs[i]}">`;
  }
  container.innerHTML = imgDom;
}
renderImg();
