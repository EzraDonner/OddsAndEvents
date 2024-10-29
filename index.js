let numberBank = [];
let odds = [];
let evens = [];

document.addEventListener("DOMContentLoaded", () => {
  const addNumberForm = document.querySelector("form");
  const numberInput = document.querySelector("input[name='number']");
  const numberBankOutput = document.querySelector("#numberBank > output");

  addNumberForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let numberInputValue = numberInput.value;
    numberBank.push(numberInputValue);
    numberBankOutput.textContent = numberBank;
  });

  const sortOneButton = document.getElementById("sortOne");
  const oddsOutput = document.querySelector("#odds > output");
  const evensOutput = document.querySelector("#evens > output");

  const sortAllButton = document.getElementById("sortAll");

  sortOneButton.addEventListener("click", () => {
    if (numberBank[0] % 2 === 0) {
      evens.push(numberBank[0]);
      numberBank.shift();
      evensOutput.textContent = evens;
      numberBankOutput.textContent = numberBank;
    } else {
      odds.push(numberBank[0]);
      numberBank.shift();
      oddsOutput.textContent = odds;
      numberBankOutput.textContent = numberBank;
    }
  });
  sortAllButton.addEventListener("click", () => {
    numberBank.forEach((number) => {
      if (number % 2 === 0) {
        evens.push(number);
        evensOutput.textContent = evens;
      } else {
        odds.push(number);
        oddsOutput.textContent = odds;
      }
    });
    numberBank = [];
    numberBankOutput.textContent = numberBank;
  });
});
