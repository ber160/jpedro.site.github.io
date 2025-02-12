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