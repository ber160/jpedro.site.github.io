//calculadora
let numero1 = parseInt(prompt( "Digite o 1° número"))
let numero2 = parseInt(prompt( "Digite o 2° número"))
//Processamento de Dados
let soma = numero1 + numero2
let subtracao = numero1 - numero2
let multiplicacao = numero1 * numero2
let divisao = numero1 / numero2
let resto = numero1 % numero2
let potencia = numero1 ** numero2
let raiz = numero1 ** (1/2)
let incremento = numero1 + 1 //++numero1
let incremento2 = numero2 + 1 //++numero2
let decremento = numero1 - 1 //--numero1
let decremento2 = numero2 - 1

//Saida de Dados
document.write("<br> A soma dos números é: " + soma) 
document.write("<br> A subtracao dos números é: " + subtracao)
document.write("<br> A multiplicacao dos números é: " + multiplicacao)
document.write("<br> A divisao dos números é: " + divisao)
document.write("<br> O resto da divisão é: " + resto)
document.write("<br> A potencia dos numeros é: " + potencia)
document.write("<br> A raiz do número é: " + raiz)
document.write("<br> O incremento de: " + numero1 + " é " + incremento)
document.write("<br> O incremento de: " + numero2 + " é " + incremento2)
document.write("<br> O decremento de " + numero1 + " é " + decremento)
document.write("<br> O decremento de " + numero2 + " é " + decremento2)

//calculadora
let real = parseFloat(prompt("digite um numero"))
//armazenamento de dados
let dolar = real * 5.77
// Saida de dados
document.write("o valor do real em dolar  é: " + dolar)

//celcius
// Solicitar ao usuário que insira a temperatura em Celsius
var celsius = prompt("Digite a temperatura em Celsius:");
// Verificar se o usuário forneceu um valor
if (celsius !== null && celsius !== '') {
    // Converter para Fahrenheit
    var fahrenheit = (celsius * 9/5) + 32;
    // Exibir o resultado
    alert(celsius + "°C é igual a " + fahrenheit.toFixed(2) + "°F");
} else {
    alert("Por favor, insira um valor válido!");
}

//metro
 // Solicitar ao usuário que insira a medida em metros
 var metros = prompt("Digite o valor em metros:");

 // Verificar se o usuário forneceu um valor
 if (metros !== null && metros !== '') {
     // Converter metros para centímetros
     var centimetros = metros * 100;

     // Exibir o resultado
     alert(metros + " metros é igual a " + centimetros + " centímetros");
 } else {
     alert("Por favor, insira um valor válido!");
 }

 //imc
 let altura =parseFloat(prompt("digite sua altura"))
let sexo = prompt("digite seu sexo")


if (sexo == "masculino"){
  let masculino = (72.7 * altura) - 58
  document.write("seu peso ideal é: " + masculino)
} 
else {
  let feminino = (62.1 * altura) - 44.7
  document.write("seu peso ideal é: " + feminino)
}
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

//quiz
function iniciarQuiz() {
    let pontuacao = 0;
    
    let resposta1 = prompt("Qual esporte eu gosto de jogar?\nA) Futebol\nB) Basquete\nC) Vôlei\nD) Natação");
    if (resposta1 && resposta1.toLowerCase() === "c") pontuacao++;

    let resposta2 = prompt("Quantos anos eu tenho?\nA) 14\nB) 16\nC) 18\nD) 20");
    if (resposta2 && resposta2.toLowerCase() === "b") pontuacao++;

    let resposta3 = prompt("Em que ano entrei no IF?\nA) 2022\nB) 2023\nC) 2024\nD) 2025");
    if (resposta3 && resposta3.toLowerCase() === "c") pontuacao++;

    alert(`Quiz finalizado! Sua pontuação: ${pontuacao}/3`);
}