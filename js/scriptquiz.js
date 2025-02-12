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