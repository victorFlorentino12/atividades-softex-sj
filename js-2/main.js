function calcularMedia() {
    const nota1 = parseFloat(prompt("Digite a primeira nota:"));
    const nota2 = parseFloat(prompt("Digite a segunda nota:"));
    const nota3 = parseFloat(prompt("Digite a terceira nota:"));

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        console.log("Por favor, insira valores numéricos válidos.");
    } else {

        const media = (nota1 + nota2 + nota3) / 3;

        console.log("A média das notas é: " + media.toFixed(2)); 
    }
}
calcularMedia();