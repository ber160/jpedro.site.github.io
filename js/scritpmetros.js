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