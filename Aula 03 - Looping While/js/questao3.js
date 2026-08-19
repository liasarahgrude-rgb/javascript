// Crie um programa que usa um laço do while para simular uma compra. 
// O preço de um item é R$ 5,00. Use uma variável acumuladora chamada total e uma variável 
// itens (contador). O programa deve somar o preço do item ao total e repetir a compra pelo 
// menos uma vez e parar quando o total atingir ou ultrapassar R$ 15,00.
// Declaração das variáveis
const precoItem = 5.00;
let total = 0.00; 
let itens = 0;   
// O laço executa enquanto o total for menor que R$ 15,00
while (total < 15.00) {
    total += precoItem;  // Soma o preço do item ao total
    itens++;   // Incrementa a quantidade de itens
}
console.log("\n--- Resumo Final da Compra ---");
console.log(`Quantidade de itens comprados: ${itens}`);
console.log(`Total a pagar: R$ ${total.toFixed(2)}`);