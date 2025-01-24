// Creazione degli elementi
const title = document.createElement("h1");
const container = document.createElement("div");
const counterDisplay = document.createElement("p");
const incrementButton = document.createElement("button");
const decrementButton = document.createElement("button");

// Configurazione degli elementi
title.textContent = "JavaScript Counter"; // Titolo
counterDisplay.textContent = "0"; // Valore iniziale del counter
incrementButton.textContent = "+"; // Testo del pulsante +
decrementButton.textContent = "-"; // Testo del pulsante -

// Funzionalità del counter
let counter = 0;

incrementButton.addEventListener("click", () => {
  counter++;
  counterDisplay.textContent = counter;
});

decrementButton.addEventListener("click", () => {
  counter--;
  counterDisplay.textContent = counter;
});

// Aggiunta degli elementi al DOM
document.body.appendChild(title); // Aggiungi il titolo al body
document.body.appendChild(container); // Aggiungi il contenitore al body
container.appendChild(counterDisplay);
container.appendChild(decrementButton);
container.appendChild(incrementButton);
