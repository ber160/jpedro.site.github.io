
//jogo
let min = 1;
let max = 100;
let guess = Math.floor((min + max) / 2);

document.getElementById("guess-text").innerText = `O seu número é ${guess}?`;

function checkAnswer(response) {
  if (response === "menor") {
      max = guess - 1;
  } else if (response === "maior") {
      min = guess + 1;
  } else {
      document.getElementById("guess-text").innerText = `Acertei! O número era ${guess}! 🎉`;
      return;
  }

  if (min > max) {
      document.getElementById("guess-text").innerText = "Algo deu errado! Você mudou de número? 🤔";
      return;
  }

  guess = Math.floor((min + max) / 2);
  document.getElementById("guess-text").innerText = `O seu número é ${guess}?`;
}