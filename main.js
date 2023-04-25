// Variaveis
const closedCookie = document.querySelector("#closedCookie");
const buttonReset = document.querySelector("button");
const screen1 = document.querySelector("#screen1");
const screen2 = document.querySelector("#screen2");

const phrases = [
  "A vida trará coisas boas se tiver paciência.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
  "Siga os bons e aprenda com eles.",
  "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
  "O riso é a menor distância entre duas pessoas.",
  "Nada é por acaso… Acredite em seus sonhos e nos seus potenciais….Na vida tudo se supera..",
  "Você sempre será a sua melhor companhia!",
];

// Eventos
closedCookie.addEventListener("click", openTheCookie);
buttonReset.addEventListener("click", resetCookie);

//funções
function openTheCookie() {
  toggleScreen();
  chooseRandomPhrase();
}

function resetCookie() {
  toggleScreen();
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function chooseRandomPhrase() {
  const randomNumber = Math.floor(Math.random() * phrases.length);
  document.querySelector("#screen2 p").textContent = phrases[randomNumber];
}
