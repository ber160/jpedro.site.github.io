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