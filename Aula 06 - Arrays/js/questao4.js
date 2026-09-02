// Crie um array chamado listaDeTarefas com 3 tarefas iniciais.
// Use loops e as operações básicas que você aprendeu para:
// Adicionar uma 4ª tarefa no final. 
// Marcar a primeira tarefa como "FEITA" usando substituição
// por índice. Imprimir todas as tarefas usando um loop while.
let listaDeTarefas = ["Lavar a louça", "Varrer a casa", "Estudar"];
let i = 0;

listaDeTarefas.push("Beber agua");
listaDeTarefas[0] = "FEITA";

while(i < listaDeTarefas.length){
    console.log(`Tarefa ${i}: ${listaDeTarefas[i]}`);
    i++;
}