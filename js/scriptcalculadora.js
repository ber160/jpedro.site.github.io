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