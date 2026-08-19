// Crie um programa com um laço while que só deve parar quando uma variável de controle 
// booleana (flag) chamada estaLogado mudar para true. A flag deve começar como false e 
// mudar para true após 3 tentativas simuladas de login (iterações).
let estaLogado = false 
let contador = 0
while(estaLogado === false){
          contador ++
          console.log(contador)
          if (contador === 3){
          estaLogado = true
          console.log("acesso liberado" , estaLogado)
          }
} 
