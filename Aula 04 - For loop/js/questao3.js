// Crie um laço for que itere os números de 1 a 15. Dentro do laço, use uma estrutura if para
// imprimir no console apenas os números que são múltiplos de 3 (ou seja, quando o resto da 
// divisão por 3 for 0).
for (let i = 1; i <= 15; i++){
    if (i % 3 === 0){
        console.log("Multiplo de 3:", i);
    }
}