// Crie um mini projeto em JavaScript que simule o cálculo de Pontos de Experiência (XP) 
// ganhos em um jogo. Use uma variável acumuladora para o XP total. 
// Simule 4 fases (repetições) do jogo, onde cada fase concede 50 pontos de XP. 
// Use um laço for para realizar as repetições e acumular o XP total. 
// Ao final do laço, imprima o total de XP.
let xp_total = 0;
for (let i = 1; i<= 4; i++){
    let xp_ganho = Number(prompt("Digite o valor de XP que você ganhou na" + fase + "ª fase:"));
    xp_total += xp_ganho;
}
console.log(`XP Total acumulado: ${xp_total} 🏆`);
