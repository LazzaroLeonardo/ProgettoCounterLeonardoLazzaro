// Creazione degli elementi
// Creating the elements
const title = document.createElement("h1");
const container = document.createElement("div");
const counterDisplay = document.createElement("p");
const incrementButton = document.createElement("button");
const decrementButton = document.createElement("button");

// Configurazione degli elementi
// Configuring the elements
title.textContent = "JavaScript Counter"; // Titolo  // Title
counterDisplay.textContent = "0"; // Valore iniziale del counter  // Initial value of the counter
incrementButton.textContent = "+"; // Testo del pulsante +  // Button text +
decrementButton.textContent = "-"; // Testo del pulsante -  // Button text -

// Funzionalità del counter
// Counter functionality
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
// Adding elements to the DOM
document.body.appendChild(title);
document.body.appendChild(container);
container.appendChild(counterDisplay);
container.appendChild(decrementButton);
container.appendChild(incrementButton);
