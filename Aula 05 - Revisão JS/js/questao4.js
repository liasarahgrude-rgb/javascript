// Desenvolva um programa que conte os votos a favor e contra, integrando variáveis, arrays,
// loops e condicionais. Crie um Array chamado votos com os valores: ["SIM", "NAO", "SIM", 
// "SIM", "NAO"] (Strings). Crie duas variáveis contadoras e inicie-as com 0: votosSim e 
// votosNao. Use um Loop (for) para percorrer o array de votos. Dentro do loop, use uma 
// Condicional Múltipla (if/else) para: Se o voto for "SIM", incremente votosSim. 
// Caso contrário, incremente votosNao. Ao final, exiba o total de votosSim e votosNao.
let votos = ["SIM", "NAO", "SIM", "SIM", "NAO"];
let votosSim = 0;
let votosNao = 0;
// votos.lenght = tamanho do array
for(let i = 0; i < votos.length; i++){
    if(votos[i] === "SIM"){
        votosSim++;
    }else{
        votosNao++;
    }
}
// Esses dois fazem a mesma coisa, só muda a estrutura
console.log(`SIM: ${votosSim}, NÃO: ${votosNao}`);
// Sem usar $ e crase(usando aspas e o sinal de +)
// console.log("SIM: " + votosSim + ", NÃO: " + votosNao);